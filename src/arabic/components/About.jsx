import React from "react";
import Logo from "../../../public/assets/images/Logo.gif";
import { useState } from "react";

const About = () => {
  const [openIndex, setOpenIndex] = useState(null); // No need for TypeScript type annotations

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative  bg-white py-10" id="about">
      <div className="border-b border-[#1E1E1E]/20 bg-white">
        <div className="hero pb-10">
          <div className="hero-content flex-col lg:flex-row-reverse justify-between items-cenetr md:items-start lg:w-[90%]">
            <img
              src={Logo}
              className="max-w-xs md:max-w-sm rounded-lg md:w-1/4"
              alt="College Logo"
            />
            <div className="text-center lg:text-right md:w-3/4">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-content-base">
                مرحبا بك في كليتنا
              </h2>

              <div id="accordion-custom text-right">
                {/* Accordion Item 1 */}
                <div>
                  <button
                    onClick={() => toggleAccordion(1)}
                    className="flex flex-row-reverse items-center justify-between w-full py-5 font-medium text-right text-gray-500 border-b border-gray-200 gap-3"
                  >
                    <span>النشأة</span>
                    <svg
                      className={`w-3 h-3 transform ${
                        openIndex === 1 ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                  {openIndex === 1 && (
                    <div className="py-5 border-b border-gray-200">
                      <p className="mb-2 text-gray-500">
                        أُنشِئَت كلية غبيش للعلوم والتكنولوجيا في غبيش عام 2017
                        م كمؤسسةٍ أهلية خاصة، تُعنى بتدريس العلوم التقنية في
                        مجالات الإدارة، الاقتصاد، القانون وتقنية المعلومات وهي
                        تتبع إدارة التعليم الأهلي الخاص والاجنبي بوزارة التعليم
                        العالي والبحث العلمي السودانية. تمنح الكلية خريجيها
                        درجتي البكالوريوس والدبلوم في خمسة تخصصات ضمن برامج
                        دراسية متميزة، وفق نظام الساعات المعتمدة، حيث يدرس
                        الطالب 101ساعة معتمدة موزعة علي أربعةِ فصولٍ في تخصصاتِ
                        درجة الدبلوم، و161-174 ساعة معتمدة موزعة علي ثمانيةِ
                        فصولٍ دراسيةٍ موزعةٍ على أربعِ سنواتٍ لتخصصاتِ
                        البكالوريوس.
                      </p>
                    </div>
                  )}
                </div>
                {/* Accordion Item 2*/}
                <div>
                  <button
                    onClick={() => toggleAccordion(2)}
                    className="flex flex-row-reverse items-center justify-between w-full py-5 font-medium text-right text-gray-500 border-b border-gray-200 gap-3"
                  >
                    <span>الرسالة</span>
                    <svg
                      className={`w-3 h-3 transform ${
                        openIndex === 2 ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                  {openIndex === 2 && (
                    <div className="py-5 border-b border-gray-200">
                      <p className="mb-2 text-gray-500">
                        تسعى كلية غبيش للعلوم والتكنولوجيا لتقديم خدمات تعليمية
                        وبحثية واستشارية متميزة على المستوى المحلي والإقليمي
                        والعالمي مع الالتزام بالمسؤولية المجتمعية من خلال كادر
                        بشري مؤهل، ومناهج متطورة، وبيئة تعليمية وتكنولوجية محفزة
                        للإبداع، وشراكات محلية وقطرية بل عالمية فاعلة، تسهم في
                        إعداد مخرجات كفؤة تلبي احتياجات سوق العمل ومتطلبات
                        التنمية، وفقاً لأنظمة ومعايير الجودة والاعتماد
                        الأكاديمي.
                      </p>
                    </div>
                  )}
                </div>
                {/* Accordion Item 3 */}
                <div>
                  <button
                    onClick={() => toggleAccordion(3)}
                    className="flex flex-row-reverse items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
                  >
                    <span>الرؤية</span>
                    <svg
                      className={`w-3 h-3 transform ${
                        openIndex === 3 ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                  {openIndex === 3 && (
                    <div className="py-5 border-b border-gray-200">
                      <p className="mb-2 text-gray-500">
                        أن تصبح كلية غبيش للعلوم والتكنولوجيا إحدى الكليات
                        الرائدة محليا وإقليمياً والمتميزة عالمياً.
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion Item 4 */}
                <div>
                  <button
                    onClick={() => toggleAccordion(4)}
                    className="flex flex-row-reverse items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
                  >
                    <span>الأهداف</span>
                    <svg
                      className={`w-3 h-3 transform ${
                        openIndex === 4 ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                  {openIndex === 4 && (
                    <div className="py-5 border-b border-gray-200">
                      <p className="mb-2 text-gray-500">
                        <ol className="" lang="ar">
                          <li>
                            {" "}
                            إكساب الطالب المعارف والمهارات في التخصصات
                            الأكاديمية المختلفة{" "}
                          </li>
                          <li>
                            {" "}
                            ربط المخرجات التعليمية بمتطلبات التنمية واحتياجات
                            سوق العمل{" "}
                          </li>
                          <li>
                            {" "}
                            الإسهام في دعم جهود البحث العلمي المعرفي والتطبيقي
                            في المجالات المختلفة{" "}
                          </li>
                          <li>
                            {" "}
                            توفير البنية التحتية اللازمة لدعم العملية التعليمية
                            والخدمات والأنشطة الطلابية{" "}
                          </li>
                          <li>
                            {" "}
                            التوسع في الشراكات وتطوير العلاقة مع الجامعات
                            ومؤسسات البحث العلمي محلياً ودولياُ{" "}
                          </li>
                          <li>
                            {" "}
                            تعزيز دور الجامعة في خدمة المجتمع بتقديم برامج
                            استشارية وتدريبية في مختلف جوانب التنمية{" "}
                          </li>
                        </ol>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
