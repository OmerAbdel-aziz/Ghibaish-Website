import React from "react";
import StaffCard from "./sub-components/StaffCard";
import { motion } from "framer-motion";
import AbdelBasit from "../../../public/assets/images/AbdelBasit.jpg";
import Altom from "../../../public/assets/images/Altom.jpg";
import Hussein from "../../../public/assets/images/Hussein.jpg";
import Fadl from "../../../public/assets/images/Fadl.jpg";
import Avatar from "../../../public/assets/images/Avatar.webp";

const staff = [
  {
    name: "بروفيسور عبد الباسط ادم مريود",
    role: "رئيس المجلس و المؤسس",
    image: AbdelBasit,
  },
  {
    name: "بروفسور احمد محمدين التوم",
    role: "عضو مجلس الأمناء",
    image: Altom,
  },
  {
    name: "بروفسور احمد اسماعيل حسين  ",
    role: "عضو مجلس الأمناء",
    image: Hussein,
  },

  {
    name: "بروفسور سيد فضل علي المولي",
    role: "مدير الكلية",
    image: Fadl,
  },

  {
    name: "دكتور الصادق محمد ادم على",
    role: "عضو مجلس الأمناء",
    image: Avatar,
  },
  {
    name: "دكتور ادم الحاج احمد يس",
    role: "عضو مجلس الأمناء",
    image: Avatar,
  },
  {
    name: "دكتور صلاح المصري",
    role: "عضو مجلس الأمناء",
    image: Avatar,
  },
  {
    name: "الامير عبد القادر علي محمد عبيد الله",
    role: "عضو مجلس الأمناء",
    image: Avatar,
  },
  {
    name: " الاستاذة انشراح محمد بابكر",
    role: "عضو مجلس الأمناء",
    image: Avatar,
  },
  {
    name: "الاستاذ قصي عبد الباسط ادم    ",
    role: "عضو مجلس الأمناء",
    image: Avatar,
  },
  {
    name: "الشيخ عثمان ادم مريود ",
    role: "عضو مجلس الأمناء",
    image: Avatar,
  },
];

const Staff = () => {
  return (
    <div
      className="flex w-full flex-col px-10 bg-white relative bottom-10 top-[555px]"
      id="staff"
    >
      <div className="border-b  border-[#1E1E1E]/20 bg-white mx-auto max-w-[95%]">
        <section class=" text-content-base">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-content-base">
                إدارة الكلية
              </h2>
              <p class="font-light mb-8 lg:mb-16 sm:text-xl ">
                يضم مجلس إدارة الكلية مجموعة من الخبراء والأكاديميين والمهنيين
                البارزين الذين يجمعهم التزام مشترك بتعزيز مسيرة التعليم والبحث
                العلمي. يعمل المجلس على وضع الرؤى الاستراتيجية وضمان تحقيق أهداف
                الكلية في تقديم تعليم عالي الجودة، وبناء شراكات فاعلة مع المجتمع
                المحلي والعالمي. تحت قيادتهم، تسعى الكلية دائمًا إلى الريادة
                والابتكار في مختلف المجالات الأكاديمية والمهنية.
              </p>
              <a
                href="/staff"
                class="inline-flex flex-row-reverse gap-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1E1E1E] rounded-lg hover:bg-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300 md:inline-flex"
              >
                اكتشف المزيد
                <svg
                  class="rotate-180 w-3.5 h-3.5 ms-2"
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
            <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {staff
                .slice(0, 3)
                .reverse()
                .map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <StaffCard member={member} />
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Staff;
