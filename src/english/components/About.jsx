import Logo from "../../../public/assets/images/Logo.gif";
import { useState } from "react";

const About = () => {
  const [openIndex, setOpenIndex] = useState(null); // No need for TypeScript type annotations

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative top-[555px] bg-white py-10" id="about">
      <div className="border-b border-[#1E1E1E]/20 bg-white">
        <div className="hero pb-10">
          <div className="hero-content flex-col lg:flex-row justify-between items-start lg:w-[90%]">
            <img
              src={Logo}
              className="max-w-xs md:max-w-sm rounded-lg md:w-1/4"
              alt="College Logo"
            />
            <div className="text-center lg:text-left md:w-3/4">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-content-base">
                About the College
              </h2>

              <div id="accordion-custom">
                {/* Accordion Item 1 */}
                <div>
                  <button
                    onClick={() => toggleAccordion(1)}
                    className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
                  >
                    <span>History & Foundation</span>
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
                        Ghibaish College of Science and Technology was
                        established in Ghibaish in 2017 as a private institution
                        specializing in technical sciences, including
                        management, economics, law, and information technology.
                        It operates under the Directorate of Private and Foreign
                        Education at the Sudanese Ministry of Higher Education
                        and Scientific Research. The college grants bachelor’s
                        and diploma degrees in five disciplines through
                        distinguished academic programs. Diploma students
                        complete 101 credit hours across four semesters, while
                        bachelor’s students complete 161–174 credit hours across
                        eight semesters over four years.
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion Item 2 */}
                <div>
                  <button
                    onClick={() => toggleAccordion(2)}
                    className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
                  >
                    <span>Vision</span>
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
                        To become a leading college locally and regionally,
                        distinguished globally.
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion Item 3 */}
                <div>
                  <button
                    onClick={() => toggleAccordion(3)}
                    className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
                  >
                    <span>Mission</span>
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
                        Ghibaish College of Science and Technology strives to
                        provide outstanding educational, research, and
                        consultancy services at local, regional, and
                        international levels. It is committed to social
                        responsibility through qualified human resources,
                        advanced curricula, a stimulating educational and
                        technological environment, and effective local and
                        international partnerships. The college aims to prepare
                        competent graduates who meet the needs of the labor
                        market and development requirements, adhering to quality
                        standards and academic accreditation.
                      </p>
                    </div>
                  )}
                </div>
                {/* Accordion Item 4 */}
                <div>
                  <button
                    onClick={() => toggleAccordion(4)}
                    className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
                  >
                    <span>Goals</span>
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
                      <ol className="list-decimal list-inside text-gray-500">
                        <li>
                          Equip students with knowledge and skills in various
                          academic disciplines.
                        </li>
                        <li>
                          Align educational outcomes with development needs and
                          labor market demands.
                        </li>
                        <li>
                          Support scientific and applied research efforts in
                          various fields.
                        </li>
                        <li>
                          Provide the necessary infrastructure to support
                          educational processes, services, and student
                          activities.
                        </li>
                        <li>
                          Expand partnerships and enhance relationships with
                          universities and research institutions locally and
                          internationally.
                        </li>
                        <li>
                          Strengthen the college’s role in community service by
                          offering consultancy and training programs in various
                          aspects of development.-
                        </li>
                      </ol>
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
