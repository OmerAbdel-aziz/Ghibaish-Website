import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../../utils/supabase";
import { useToast } from "@/hooks/use-toast";

const StaffEditingPanel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [nameAr, setNameAr] = useState("");
  const [nameEn, setNameEn] = useState("");
  const [roleAr, setRoleAr] = useState("");
  const [roleEn, setRoleEn] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [currentImageUrl, setCurrentImageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        console.log("Fetching staff with ID:", id);
        const { data, error } = await supabase
          .from("staff")
          .select("name_ar, name_en, role_ar, role_en, image_url")
          .eq("id", id)
          .single();

        if (error) throw error;

        console.log("Fetched data:", data);
        setNameAr(data.name_ar || "");
        setNameEn(data.name_en || "");
        setRoleAr(data.role_ar || "");
        setRoleEn(data.role_en || "");
        setCurrentImageUrl(data.image_url || "");
      } catch (error) {
        console.error("Fetch error:", error);
        toast({
          title: "خطأ",
          description: "فشل في جلب البيانات: " + error.message,
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, [id, toast]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nameAr || !nameEn || !roleAr || !roleEn) {
      toast({
        title: "خطأ",
        description: "جميع الحقول مطلوبة",
        variant: "destructive",
      });
      return;
    }

    try {
      console.log("Supabase client:", supabase);
      console.log("Updating staff with ID:", id);

      let imageUrl = currentImageUrl; // Keep existing URL unless new image is uploaded

      // Handle image upload if a new file is selected
      if (imageFile) {
        console.log("Uploading new image:", imageFile.name);
        const imageName = `${Date.now()}-${Math.random()
          .toString(36)
          .substring(2, 15)}-${imageFile.name}`;

        const { error: uploadError } = await supabase.storage
          .from("staff-images")
          .upload(imageName, imageFile);

        if (uploadError) {
          console.error("Upload error:", uploadError);
          throw uploadError;
        }

        const { data: urlData } = supabase.storage
          .from("staff-images")
          .getPublicUrl(imageName);
        imageUrl = urlData.publicUrl;
        console.log("New image URL:", imageUrl);
      }

      const updates = {
        name_ar: nameAr,
        name_en: nameEn,
        role_ar: roleAr,
        role_en: roleEn,
        image_url: imageUrl,
      };

      console.log("Update payload:", updates);

      const { data, error } = await supabase
        .from("staff")
        .update(updates)
        .eq("id", id);

      if (error) {
        console.error("Update error:", error);
        throw error;
      }

      console.log("Updated data:", data);

      toast({
        title: "تم التحديث بنجاح",
        description: "تم تحديث بيانات عضو الهيئة",
      });

      navigate("/admin/staff");
    } catch (error) {
      console.error("Caught error:", error);
      toast({
        title: "خطأ",
        description: `فشل التحديث: ${error.message}`,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return <div className="text-center py-8">جاري التحميل...</div>;
  }

  return (
    <section className="w-full relative">
      <div className="py-8 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          تعديل بيانات عضو الهيئة الإدارية
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex flex-col items-end">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              الاسم بالعربية
            </label>
            <input
              type="text"
              value={nameAr}
              onChange={(e) => setNameAr(e.target.value)}
              className="shadow-sm bg-gray-50 border border-[#637C65] text-gray-900 text-sm rounded-lg focus:ring-[#637C65] focus:border-[#637C65] block w-full p-2.5"
              placeholder="أدخل الاسم بالعربية"
              required
            />
          </div>
          <div className="flex flex-col items-end">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              الاسم بالإنجليزية
            </label>
            <input
              type="text"
              value={nameEn}
              onChange={(e) => setNameEn(e.target.value)}
              className="shadow-sm bg-gray-50 border border-[#637C65] text-gray-900 text-sm rounded-lg focus:ring-[#637C65] focus:border-[#637C65] block w-full p-2.5"
              placeholder="Enter name in English"
              required
            />
          </div>
          <div className="flex flex-col items-end">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              الدور بالعربية
            </label>
            <input
              type="text"
              value={roleAr}
              onChange={(e) => setRoleAr(e.target.value)}
              className="shadow-sm bg-gray-50 border border-[#637C65] text-gray-900 text-sm rounded-lg focus:ring-[#637C65] focus:border-[#637C65] block w-full p-2.5"
              placeholder="أدخل الدور بالعربية"
              required
            />
          </div>
          <div className="flex flex-col items-end">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              الدور بالإنجليزية
            </label>
            <input
              type="text"
              value={roleEn}
              onChange={(e) => setRoleEn(e.target.value)}
              className="shadow-sm bg-gray-50 border border-[#637C65] text-gray-900 text-sm rounded-lg focus:ring-[#637C65] focus:border-[#637C65] block w-full p-2.5"
              placeholder="Enter role in English"
              required
            />
          </div>
          <div className="flex flex-col items-end">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              صورة عضو الهيئة (اختياري)
            </label>
            {currentImageUrl && (
              <div className="mb-2">
                <img
                  src={currentImageUrl}
                  alt="Current staff"
                  className="w-32 h-32 object-cover rounded"
                />
              </div>
            )}
            <input
              type="file"
              onChange={(e) => setImageFile(e.target.files[0])}
              accept="image/*"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="block w-full rounded-md bg-[#1E1E1E] hover:bg-[#637C65] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#637C65]"
          >
            تحديث بيانات عضو الهيئة
          </button>
        </form>
      </div>
    </section>
  );
};

export default StaffEditingPanel;
