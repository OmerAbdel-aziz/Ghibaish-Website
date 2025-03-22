import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

const AddingContentForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [contentEn, setContentEn] = useState("");
  const [error, setError] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  //form subision logic for arabic posts
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Updated validation to include image
    if (!title || !content || !titleEn || !contentEn || !imageFile) {
      toast({
        title: "Error",
        description: "جميع الحقول مطلوبة بما في ذلك الصورة", // Arabic text for "All fields including image are required"
        variant: "destructive",
      });
      return;
    }

    try {
      // ==== NEW IMAGE UPLOAD LOGIC ====
      // Generate unique filename
      const imageName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 15)}-${imageFile.name}`;

      // Upload image to storage
      const { error: uploadError } = await supabase.storage
        .from("news-images")
        .upload(imageName, imageFile);

      if (uploadError) throw uploadError;

      // Get public URL
      const {
        data: { publicUrl },
      } = await supabase.storage.from("news-images").getPublicUrl(imageName);

      // ==== EXISTING ID LOGIC ====
      const [{ data: arabicData }, { data: newsData }] = await Promise.all([
        supabase
          .from("ArabicNews")
          .select("id")
          .order("id", { ascending: false })
          .limit(1),
        supabase
          .from("News")
          .select("id")
          .order("id", { ascending: false })
          .limit(1),
      ]);

      const maxArabicId = arabicData?.[0]?.id ?? 0;
      const maxNewsId = newsData?.[0]?.id ?? 0;
      const newId = Math.max(maxArabicId, maxNewsId) + 1;

      // ==== UPDATED INSERT WITH IMAGE URL ====
      const [{ error: arabicError }, { error: englishError }] =
        await Promise.all([
          supabase.from("ArabicNews").insert({
            id: newId,
            title,
            content,
            image_url: publicUrl, // Added image URL
          }),
          supabase.from("News").insert({
            id: newId,
            title: titleEn,
            content: contentEn,
            image_url: publicUrl, // Added image URL
          }),
        ]);

      if (arabicError) throw arabicError;
      if (englishError) throw englishError;

      // ==== EXISTING SUCCESS HANDLING ====
      toast({
        title: "تمت اضافة الخبر بنجاح", // "Post added successfully"
        description: `تم النشر في ${new Date().toLocaleString()}`,
      });

      // Reset form including image
      setTitle("");
      setContent("");
      setTitleEn("");
      setContentEn("");
      setImageFile(null); // Clear image input
    } catch (error) {
      console.error(error);
      // Enhanced error messages
      const errorMessage = error.message.includes("storage")
        ? "فشل رفع الصورة، تأكد من صيغة الملف (JPG/PNG)" // "Image upload failed, check file format"
        : error.message || "فشل اضافة الخبر"; // "Failed to add post"

      toast({
        title: "خطأ",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <section class=" w-full relative">
        <div class="py-8 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
            اضافة خبر جديد
          </h2>

          <form action="#" class="space-y-8" onSubmit={handleSubmit}>
            <div className="flex flex-col items-end">
              <label
                for="title"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                عنوان الخبر
              </label>
              <input
                type="text"
                id="title"
                class="shadow-sm bg-gray-50 border border-[#637C65] text-gray-900 text-sm rounded-lg focus:ring-[#637C65] focus:border-[#637C65] block w-full p-2.5"
                placeholder="type the title here"
                onChange={(e) => setTitle(e.target.value)}
                required
                value={title}
              />
            </div>
            <div class="sm:col-span-2 flex flex-col items-end">
              <label
                for="content"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                محتوى الخبر
              </label>
              <textarea
                id="content"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-[#637C65] focus:ring-[#637C65] focus:border-[#637C65] "
                placeholder="Type the content here"
                onChange={(e) => setContent(e.target.value)}
                required
                value={content}
              ></textarea>
            </div>
            <div className="flex flex-col items-end">
              <label
                for="title"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                عنوان الخبر بالانجليزية
              </label>
              <input
                type="text"
                id="title"
                class="shadow-sm bg-gray-50 border border-[#637C65] text-gray-900 text-sm rounded-lg focus:ring-[#637C65] focus:border-[#637C65] block w-full p-2.5"
                placeholder="type the title here"
                onChange={(e) => setTitleEn(e.target.value)}
                required
                value={titleEn}
              />
            </div>
            <div class="sm:col-span-2 flex flex-col items-end">
              <label
                for="content"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                محتوى الخبر بالانجليزية
              </label>
              <textarea
                id="content"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-[#637C65] focus:ring-[#637C65] focus:border-[#637C65] "
                placeholder="Type the content here"
                onChange={(e) => setContentEn(e.target.value)}
                value={contentEn}
              ></textarea>
            </div>
            <div className="w-full">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 flex flex-col items-end"
                htmlFor="user_avatar"
              >
                اضافة صورة للخبر
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
                onChange={(e) => setImageFile(e.target.files[0])} // Add this
                accept="image/*" // Add accept restriction
              />
            </div>

            <button
              type="submit"
              className="block w-full rounded-md bg-[#1E1E1E] hover:bg-[#637C65] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#637C65] "
            >
              اضافة خبر جديد
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddingContentForm;
