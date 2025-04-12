import React from "react";
import { useState, useEffect } from "react";
import StaffCard from "../components/sub-components/StaffCard";
import { supabase } from "../../utils/supabase";
import { motion } from "framer-motion";
import Header from "../components/sub-components/Header";
import AbdelBasit from "../../../public/assets/images/AbdelBasit.jpg";
import Altom from "../../../public/assets/images/Altom.jpg";
import Hussein from "../../../public/assets/images/Hussein.jpg";
import Fadl from "../../../public/assets/images/Fadl.jpg";
import Avatar from "../../../public/assets/images/Avatar.webp";
import Qusai from "../../../public/assets/images/Qusai.jpg";
import Alhaj from "../../../public/assets/images/Alhaj.jpg";

// if (loading) {
//   return <div>جاري التحميل...</div>; // "Loading..." in Arabic
// }

// const staff = [
//   {
//     name: "بروفيسور عبد الباسط ادم مريود",
//     role: "رئيس المجلس و المؤسس",
//     image: AbdelBasit,
//   },
//   {
//     name: "بروفسور احمد محمدين التوم",
//     role: "عضو مجلس الأمناء",
//     image: Altom,
//   },
//   {
//     name: "بروفسور احمد اسماعيل حسين  ",
//     role: "عضو مجلس الأمناء",
//     image: Hussein,
//   },

//   {
//     name: "بروفسور سيد فضل علي المولي",
//     role: "مدير الكلية",
//     image: Fadl,
//   },

//   {
//     name: "دكتور الصادق محمد ادم على",
//     role: "عضو مجلس الأمناء",
//     image: Avatar,
//   },
//   {
//     name: "دكتور ادم الحاج احمد يس",
//     role: "عضو مجلس الأمناء",
//     image: Alhaj,
//   },
//   {
//     name: "دكتور صلاح المصري",
//     role: "عضو مجلس الأمناء",
//     image: Avatar,
//   },
//   {
//     name: "الامير عبد القادر علي محمد عبيد الله",
//     role: "عضو مجلس الأمناء",
//     image: Avatar,
//   },
//   {
//     name: " الاستاذة انشراح محمد بابكر",
//     role: "عضو مجلس الأمناء",
//     image: Avatar,
//   },
//   {
//     name: "الاستاذ قصي عبد الباسط ادم    ",
//     role: "عضو مجلس الأمناء",
//     image: Qusai,
//   },
//   {
//     name: "الشيخ عثمان ادم مريود ",
//     role: "عضو مجلس الأمناء",
//     image: Avatar,
//   },
// ];

const ArabicStaffPage = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("staff")
        .select("name_ar, role_ar, image_url")
        .order("id", { ascending: true });

      if (error) throw error;

      // Map the data to match your component's expected format
      const formattedStaff = data.map((member) => ({
        name: member.name_ar,
        role: member.role_ar,
        image: member.image_url, // This will be a URL string
      }));

      setStaff(formattedStaff);
    } catch (error) {
      console.error("Error fetching staff:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header title={"الهيئة الإدارية"} />
      <section
        class="bg-white dark:bg-gray-900 relative  justify-end items-end flex flex-col w-full px-10  "
        lang="ar"
      >
        <div class=" px-4 max-w-screen-xl lg:py-4 lg:px-6 text-end ">
          <div class="w-full text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900">
              كلمة المؤسس ورئيس مجلس الأمناء
            </h2>
            <p class="mb-4 font-light">
              تُعدّ كلّية غبيش للعلوم والتكنولوجيا الكلية الخاصة الاولي بولاية
              غرب كردفان كما انها من الكلّيّات النّاشئة في السودان؛ إذ انطلقت
              مسيرتها في العام الجامعيّ 2017/2018م بدعم سخيّ من المؤسس، ورعاية
              وزارة التّعليم العالي والبحث العلمي، تحقيقًا للتّوجهات المستقبليّة
              للسودان في مجال التّعليم، والبحث العلميّ؛ لتوفير تعليم متميّز
              لأبناء محلية غبيش وماجاورها، ورغم حداثة الكلّيّة إلّا أنّها حققت
              إنجازات عديدة، ومتنوّعة؛ لجودة التّخطيط، والتزام الإدارة والهيئة
              التعليمية بتنفيذ أنشطتها، وفقًا لمهامّها الوظيفيّة، خالص الشكر
              والتقدير لأعضاء مجلس الامناء ومجلس الكلية لتحقيق رسالة الكلية
              ورؤيتها الاستراتيجية وسعيهم المستمر لتكون الكلية رائدة في التعليم
              الاكاديمي والبحث العلمي والابتكار وخلق المعرفة ونشرها. بصفتي رئيس
              مجلس الأمناء أؤكد بثقة التزامنا بالقيادة والتوجيه ودعم الكلية في
              سعيها المستمر لتحقيق ذلك وتطورها المستمر لتصبح جامعة غبيش للعلوم
              والتكنولوجيا بالتخطيط السليم. سائل المولى –عزّ، وجلّ- أن يُديم هذا
              العطاء، وتستمرّ عمليّات التّحسين المستمرّ في مختلف المجالات،
              لتحقيق رؤية الكلّيّة ورسالتها، والحصول على الاعترافات والاعتمادات
              الوطنيّة، والدّوليّة لبرامجها التّعليميّة.
            </p>
            <div className="py-8">
              <h2 class="text-4xl tracking-tight font-bold text-gray-900">
                كلمة العميد
              </h2>
              <p class=" font-light">
                تميزت كلية غبيش للعلوم والتكنولوجيا ومنذ تأسيسها في العام 2017
                برؤية ورسالة متقدمة طليعية، تلمست فيها احتياجات المجتمع المحلي
                فأبصرت بها السبيل وفهمت خارطة التقدم والازدهار فكان التعليم
                الأكاديمي والتقني على رأس الاولويات والاهداف مستعينة بخبرات
                وكوادر اكاديمية وتقنية لتحقيق أهدافها وغاياتها المرجوة. لذلك
                اجتهدت الكلية لتوفير خدمات مميزة وتعليم أكاديمي تقني حديث مكنَها
                من أخذ مواقع متقدمة بين مؤسسات التعليم العالي الخاص بالسودان،
                ورغم كل الصعوبات والعقبات؛ إلا أن كلية غبيش للعلوم والتكنولوجيا،
                استطاعت الحفاظ على مستواها المتميز بل وتطويره، فقامت بإضافة
                برامج جديدة علي مستوي البكالوريوس والدبلوم تلبية لحاجات السوق
                معتمدة علي التجهيزات الفنية وبرامج التدريب الميداني وذلك لضمان
                خدمة مميزة و متكاملة. نسأل الله العلي القدير أن يعييننا على
                تقديم الأفضل لأبنائنا الطلاب وللمنطقة
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class=" mx-auto max-w-[70%] md:max-w-[90%] relative pb-20">
        <div
          class="mx-auto  grid max-w-2xl grid-cols-1 gap-x-16 gap-y-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          lang="ar"
        >
          {staff.map((staff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <StaffCard member={staff} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArabicStaffPage;
