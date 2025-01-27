import React from "react";
import StaffCard from "../components/sub-components/StaffCard";
import { motion } from "framer-motion";

const staff = [
  { name: "بروفيسور عبد الباسط ادم مريود", role: "رئيس المجلس و المؤسس" },
  { name: "بروفسور احمد محمدين التوم", role: "عضو مجلس الأمناء" },
  { name: "بروفسور احمد اسماعيل حسين  ", role: "عضو مجلس الأمناء" },
  { name: "بروفسور سيد فضل علي المولي", role: "مدير الكلية" },
  { name: "دكتور الصادق محمد ادم على", role: "عضو مجلس الأمناء" },
  { name: "دكتور ادم الحاج احمد يس", role: "عضو مجلس الأمناء" },
  { name: "دكتور صلاح المصري", role: "عضو مجلس الأمناء" },
  { name: "الامير عبد القادر علي محمد عبيد الله", role: "عضو مجلس الأمناء" },
  { name: " الاستاذة انشراح محمد بابكر", role: "عضو مجلس الأمناء" },
  { name: "الاستاذ قصي عبد الباسط ادم    ", role: "عضو مجلس الأمناء" },
  { name: "الشيخ عثمان ادم مريود ", role: "عضو مجلس الأمناء" },
];

const ArabicStaffPage = () => {
  return (
    <>
      <div
        className="hero absolute top-0 min-h-[50vh] w-full"
        style={{
          backgroundImage: "url(../../assets/images/banner11.jpg)",
        }}
        lang="ar"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-end">
          <div className="max-w-md md:max-w-2xl md:justify-end md:text-right md:items-end md:left-[250%] md:relative px-10 md:px-0">
            <div className="py-8">
              <a
                href="/"
                class="hidden md:inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1E1E1E] rounded-lg hover:bg-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                <span className="ml-2 font-cairo">
                  {" "}
                  عودة الى الصفحة الرئيسية
                </span>
                <svg
                  class=" w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <h1 className="mb-5 text-4xl font-bold font-cairo">ادارة الكلية</h1>
          </div>
        </div>
      </div>
      <section
        class="bg-white dark:bg-gray-900 relative top-[250px] justify-end items-end flex flex-col w-full px-10  "
        lang="ar"
      >
        <div class="py-8 px-4 max-w-screen-xl lg:py-16 lg:px-6 text-end ">
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
              <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900">
                كلمة العميد
              </h2>
              <p class="mb-4 font-light">
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
      <div class="  bg-white mx-auto max-w-[95%] relative top-[120px]">
        <div
          class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          lang="ar"
        >
          {staff.reverse().map((staff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <StaffCard
                name={staff.name}
                role={staff.role}
                img={`/staff/${index + 1}.jpg`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArabicStaffPage;
