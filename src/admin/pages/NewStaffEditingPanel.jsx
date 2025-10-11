import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../../utils/supabase";
import { useToast } from "@/hooks/use-toast";

const NewStaffEditingPanel = () => {
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
        const { data, error } = await supabase
          .from("new_staff")
          .select("name_ar, name_en, role_ar, role_en, image_url")
          .eq("id", id)
          .single();

        if (error) throw error;

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

  const handleUpdate = async (e) => {
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
      let imageUrl = currentImageUrl;

      if (imageFile) {
        const imageName = `${Date.now()}-${Math.random()
          .toString(36)
          .substring(2, 15)}-${imageFile.name}`;

        const { error: uploadError } = await supabase.storage
          .from("staff-images")
          .upload(imageName, imageFile);

        if (uploadError) throw uploadError;

        const { data: urlData } = await supabase.storage
          .from("staff-images")
          .getPublicUrl(imageName);

        imageUrl = urlData.publicUrl;
      }

      const updates = {
        name_ar: nameAr,
        name_en: nameEn,
        role_ar: roleAr,
        role_en: roleEn,
        image_url: imageUrl,
      };

      const { data, error } = await supabase
        .from("new_staff")
        .update(updates)
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "تم التحديث",
        description: "تم تحديث بيانات الطلب",
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

  const handleDelete = async (id) => {
    if (!window.confirm("هل أنت متأكد أنك تريد حذف هذا الطلب؟")) return;

    try {
      const { error } = await supabase.from("new_staff").delete().eq("id", id);
      if (error) throw error;

      toast({
        title: "تم الحذف",
        description: `تم حذف الطلب ذو المعرف ${id}`,
      });

      navigate("/admin/staff");
    } catch (error) {
      console.error("Error deleting new_staff:", error);
      toast({
        title: "خطأ",
        description: error.message || "فشل حذف الطلب",
        variant: "destructive",
      });
    }
  };

  const handleApprove = async () => {
    if (!window.confirm("هل تريد قبول هذا الطلب ونقله إلى أعضاء الهيئة؟")) return;

    try {
      // Insert into staff table
      const { data, error } = await supabase.from("staff").insert({
        name_ar: nameAr,
        name_en: nameEn,
        role_ar: roleAr,
        role_en: roleEn,
        image_url: currentImageUrl,
      });

      if (error) throw error;

      // Delete from new_staff
      const { error: delError } = await supabase.from("new_staff").delete().eq("id", id);
      if (delError) throw delError;

      toast({
        title: "تم القبول",
        description: "تمت إضافة العضو إلى قاعدة بيانات أعضاء الهيئة",
      });

      navigate("/admin/staff");
    } catch (error) {
      console.error("Error approving new_staff:", error);
      toast({
        title: "خطأ",
        description: error.message || "فشل قبول الطلب",
        variant: "destructive",
      });
    }
  };

  if (loading) return <div className="text-center py-8">جاري التحميل...</div>;

  return (
    <section className="w-full relative">
      <div className="py-8 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          مراجعة طلب عضو هيئة
        </h2>
        <form onSubmit={handleUpdate} className="space-y-8">
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
              صورة الطلب (اختياري)
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
            حفظ التعديلات
          </button>

          <button
            type="button"
            className="block w-full rounded-md bg-[#10B981] hover:bg-[#059669] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm mt-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#637C65]"
            onClick={handleApprove}
          >
            نفل الى مجلس الأمناء
          </button>

          <button
            type="button"
            className="block w-full rounded-md bg-[#F95454] hover:bg-[#C62E2E] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm mt-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#637C65]"
            onClick={() => handleDelete(id)}
          >
            رفض وحذف الطلب
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewStaffEditingPanel;
