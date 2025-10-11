import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const AddStaffForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [nameAr, setNameAr] = useState("");
  const [nameEn, setNameEn] = useState("");
  const [roleAr, setRoleAr] = useState("");
  const [roleEn, setRoleEn] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nameAr || !nameEn || !roleAr || !roleEn ) {
      toast({
        title: "خطأ",
        description: "جميع الحقول مطلوبة",
        variant: "destructive",
      });
      return;
    }

    try {
      // Log the client state for debugging
    

      // Upload image to Supabase Storage in 'staff-images' bucket
      const imageName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 15)}-${imageFile.name}`;

      const { error: uploadError } = await supabase.storage
        .from("staff-images")
        .upload(imageName, imageFile);

      if (uploadError) {
       
        throw uploadError;
      }

      // Get public URL for uploaded image
      const { data: urlData } = await supabase.storage
        .from("staff-images")
        .getPublicUrl(imageName);

      const imageUrl = urlData.publicUrl;

      // Insert new staff record with the public image URL
      const { data, error } = await supabase.from("staff").insert({
        name_ar: nameAr,
        name_en: nameEn,
        role_ar: roleAr,
        role_en: roleEn,
        image_url: imageUrl,
      });

      
      if (error) {
       
        throw error;
      }

      

      toast({
        title: "تمت الإضافة بنجاح",
        description: "تم إضافة عضو الهيئة",
      });

      // Reset form
      setNameAr("");
      setNameEn("");
      setRoleAr("");
      setRoleEn("");
      setImageFile(null);
      // Clear native file input (by resetting the form) — optional: navigate after success
      navigate("/admin/staff");
    } catch (error) {
     
      toast({
        title: "خطأ",
        description: `فشل الإضافة: ${error.message}`,
        variant: "destructive",
      });
    }
  };

  // Helper to upload image and return public URL
  const uploadImage = async () => {
    if (!imageFile) {
      throw new Error("الرجاء اختيار صورة");
    }

    const imageName = `${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 15)}-${imageFile.name}`;

    const { error: uploadError } = await supabase.storage
      .from("staff-images")
      .upload(imageName, imageFile);

    if (uploadError) {
      throw uploadError;
    }

    const { data: urlData } = await supabase.storage
      .from("staff-images")
      .getPublicUrl(imageName);

    return urlData.publicUrl;
  };

  const handleAddToNewStaff = async (e) => {
    // don't submit the form
    if (e && e.preventDefault) e.preventDefault();

    if (!nameAr || !nameEn || !roleAr || !roleEn) {
      toast({
        title: "خطأ",
        description: "جميع الحقول مطلوبة",
        variant: "destructive",
      });
      return;
    }

    try {
      const imageUrl = await uploadImage();

      const { data, error } = await supabase.from("new_staff").insert({
        name_ar: nameAr,
        name_en: nameEn,
        role_ar: roleAr,
        role_en: roleEn,
        image_url: imageUrl,
      });

      if (error) throw error;

      toast({
        title: "تمت الإضافة إلى أعضاء هيئة التدريس",
        description: "تمت إضافة السجل بنجاح",
      });

      // Reset form
      setNameAr("");
      setNameEn("");
      setRoleAr("");
      setRoleEn("");
      setImageFile(null);
      navigate("/admin/staff");
    } catch (error) {
      console.error("Error adding to new_staff:", error);
      toast({
        title: "خطأ",
        description: `فشل الإضافة: ${error.message}`,
        variant: "destructive",
      });
    }
  };

  return (
    <section className="w-full relative">
      <div className="py-8 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          إضافة عضو هيئة إدارية جديد
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
              placeholder="أدخل الاسم بالعربية" // "Enter name in Arabic"
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
              placeholder="أدخل الدور بالعربية" // "Enter role in Arabic"
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

          <div className="w-full">
            <label className=" mb-2 text-sm font-medium text-gray-900 flex flex-col items-end">
              صورة عضو الهيئة
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              type="file"
              onChange={(e) => setImageFile(e.target.files[0])}
              accept="image/*"
              required
            />
          </div>

          <button
            type="submit"
            className="block w-full rounded-md bg-[#1E1E1E] hover:bg-[#637C65] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#637C65]"
          >
  إضافة الى مجلس الأمناء
          </button>
          <button
            type="button"
            onClick={handleAddToNewStaff}
            className="block w-full rounded-md bg-[#2563EB] hover:bg-[#1E40AF] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm mt-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#637C65]"
          >
            اضافة الى اعضاء هيئة التدريس
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddStaffForm;
