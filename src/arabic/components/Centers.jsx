import React from "react";
import Computer from "../../../public/assets/images/computer.jpg";
import Children from "../../../public/assets/images/children.jpg";

const Centers = () => {
  return (
    <div
      className="flex w-full flex-col px-10 py-10 bg-base-200 relative top-[555px]"
      id="centers"
    >
      <section className="bg-white  rounded-lg">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src={Computer}
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src={Children}
              alt="office content 2"
            />
          </div>
          <div className="font-light text-gray-500 sm:text-lg text-end">
            <h2
              className="mb-4 mt-4 text-2xl md:text-4xl
             tracking-tight font-extrabold text-gray-900 "
            >
              استكشف المراكز والمعاهد
            </h2>
            <p className="mb-4">
              تُعَدُّ المعاهد والمراكز البحثية في كليتنا حجر الأساس لتعزيز
              الابتكار والتميّز الأكاديمي. نحن نؤمن بأن البحث العلمي هو القوة
              الدافعة وراء تطور المعرفة ومعالجة التحديات المحلية والعالمية. من
              خلال مراكزنا المتخصصة، نوفر بيئة بحثية متقدمة تجمع بين أحدث
              التقنيات والخبرات الأكاديمية المتميزة، مما يُمكِّن الباحثين من
              إجراء دراسات رائدة في مجالات متنوعة مثل العلوم التطبيقية، والعلوم
              الإنسانية، وغيرها من التخصصات متعددة المجالات. تعمل هذه المراكز
              على تعزيز التعاون بين الكلية والمؤسسات البحثية المحلية والدولية،
              مما يوفر فرصًا للطلاب والأكاديميين للمشاركة في مشاريع بحثية
              مبتكرة. كما نسعى إلى مواءمة البحث العلمي مع احتياجات المجتمع،
              وتقديم حلول عملية تساهم في تحقيق التنمية المستدامة. انضموا إلينا
              لاستكشاف عالم من الفرص البحثية التي تلهم الإبداع وتكشف عن
              الإمكانات الكامنة.
            </p>

            <a
              href="/centers"
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
        </div>
      </section>
    </div>
  );
};

export default Centers;
