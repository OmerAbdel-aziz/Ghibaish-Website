import React, { useEffect, useState } from "react";
import StaffCard from "../components/sub-components/StaffCard";

const staffData = {
  member1: {
    name: "Dr. Ahmed Ali",
    role: "Head of Department",
    image: "../../assets/images/avatar.webp",
  },
  member2: {
    name: "Dr. Mohamed Hassan",
    role: "Assistant Professor",
    image: "../../assets/images/avatar.webp",
  },
  member3: {
    name: "Dr. Ahmed Ali",
    role: "Assistant Professor",
    image: "../../assets/images/avatar.webp",
  },
  member4: {
    name: "Dr. Ahmed Ali",
    role: "Assistant Professor",
    image: "../../assets/images/avatar.webp",
  },
};

const DepartmentsPage = () => {
  const [deparmentTitle, setDepartmentTitle] = useState(" ");

  return (
    <>
      <div
        className="hero absolute top-0 min-h-[50vh] w-full"
        style={{
          backgroundImage: "url(../../assets/images/header2.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content ">
          <div className="max-w-screen-2xl md:justify-start md:text-left md:items-start md:right-[8vw] lg:right-[16vw] xl:right-[26vw] md:relative px-10 md:px-0">
            <div className="py-8">
              <a
                href="/english"
                class="hidden md:inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1E1E1E] rounded-lg hover:bg-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
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
                <span className="ml-2"> Back to Home Page </span>
              </a>
            </div>
            <h1 className="mb-5 text-4xl font-bold">College Departments</h1>
            <nav>
              <ul className="space-x-4">
                <li className="inline-block">
                  <a
                    href="#management"
                    className="text-lg font-semibold text-white hover:text-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Business Administrative Sciences Department
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="#it"
                    className="text-lg font-semibold text-white hover:text-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Information Technology Department
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="#economics"
                    className="text-lg font-semibold text-white hover:text-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Economics Department
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="#law"
                    className="text-lg font-semibold text-white hover:text-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Law Department
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <section class="bg-white  relative top-[35vh] min-h-screen">
        <div class="py-8 px-4 ml-16 max-w-screen-xl lg:py-16 lg:px-2">
          <div class="max-w-screen-lg text-gray-500 sm:text-lg  ">
            <div>
              <section>
                <h2
                  className="mb-4 mt-4 text-4xl tracking-tight font-bold text-gray-900"
                  id="management"
                >
                  Department of Business Administrative Sciences
                </h2>
                <p>
                  The Department of Business Administrative Sciences was
                  established with the college's founding in 2017. It
                  encompasses majors in business management and accounting,
                  aiming to keep pace with rapid technological advancements in
                  business and accounting fields. The department continually
                  works to develop its existing programs and introduce new ones
                  that align with current and future market needs. Supported by
                  a qualified academic staff, the department is committed to
                  updating curricula and academic plans to reflect scientific
                  and technological progress. It also provides consultancy
                  services to local institutions, ministries, and the community
                  in Ghibaish.
                </p>
                <h3 className="font-bold text-black">Mission</h3>
                <p>
                  To deliver transformative business education grounded in
                  academic rigor, ethical values, and practical relevance.
                  Through innovative teaching, cutting-edge research, and strong
                  industrial partnerships, we aim to develop adaptable, skilled,
                  and socially responsible leaders who excel in a dynamic,
                  interconnected world.
                </p>
                <h3 className="font-bold text-black">Vision</h3>
                <p>
                  To be a globally recognized leader in business education and
                  research, fostering innovation, ethical leadership, and
                  sustainable practices that drive positive change in the
                  business world and society.
                </p>
                <h3 className="font-bold text-black">Objectives</h3>
                <ul>
                  <li>
                    Achieve academic excellence through comprehensive,
                    industry-aligned curricula that integrate theory and
                    practice.
                  </li>
                  <li>
                    Enhance students' critical thinking, creativity, and
                    problem-solving skills.
                  </li>
                  <li>
                    Promote impactful research addressing real-world business
                    challenges.
                  </li>
                  <li>
                    Foster interdisciplinary collaboration to develop innovative
                    solutions.
                  </li>
                  <li>
                    Cultivate ethical leadership, social responsibility, and
                    sustainability awareness among students.
                  </li>
                  <li>
                    Regularly update programs to reflect emerging trends and
                    industry needs.
                  </li>
                  <li>
                    Promote lifelong learning and professional development among
                    students, faculty, and alumni.
                  </li>
                </ul>
                <h3 className="font-bold text-black">Core Values</h3>
                <ul>
                  <li>
                    Integrity: Adherence to honesty, transparency, and ethical
                    behavior in all endeavors.
                  </li>
                  <li>
                    Excellence: Striving to achieve the highest standards in
                    education, research, and service.
                  </li>
                  <li>
                    Innovation: Encouraging creativity and forward-thinking
                    approaches to address business challenges.
                  </li>
                  <li>
                    Collaboration: Building strong relationships with
                    stakeholders for mutual success.
                  </li>
                  <li>
                    Sustainability: Promoting practices that ensure long-term
                    environmental, social, and economic well-being.
                  </li>
                </ul>
              </section>

              <section>
                <h2
                  className="mb-4  mt-4 text-4xl tracking-tight font-bold text-gray-900"
                  id="it"
                >
                  Information Technology Department
                </h2>
                <p>
                  The Information Technology Department was established in 2019
                  and aims to provide students with foundational and practical
                  knowledge in various computing and IT fields, supported by
                  training and hands-on experience. The department offers
                  bachelor's and diploma degrees in Information Technology.
                </p>
                <h3 className="font-bold text-black">Mission</h3>
                <p>
                  To deliver advanced IT solutions and services that empower
                  institutions to achieve their goals. Through innovation,
                  collaboration, and a commitment to excellence, we aim to
                  provide secure, scalable, and sustainable technology solutions
                  that enhance productivity and connectivity.
                </p>
                <h3 className="font-bold text-black">Vision</h3>
                <p>
                  To be a global leader in leveraging technology to drive
                  innovation, efficiency, and transformation, empowering
                  institutions and individuals to thrive in a digital-first
                  world.
                </p>
                <h3 className="font-bold text-black">Goals</h3>
                <ul>
                  <li>
                    Driving Technological Innovation: Staying at the forefront
                    of emerging technologies to deliver innovative solutions and
                    fostering a culture of creativity and experimentation within
                    the IT team.
                  </li>
                  <li>
                    Ensuring Operational Excellence: Providing reliable,
                    high-performance IT infrastructure and services to support
                    organizational operations, with continuous process
                    improvement to enhance efficiency and reduce downtime.
                  </li>
                  <li>
                    Enhancing Security and Compliance: Implementing robust
                    cybersecurity measures to protect data, systems, and
                    networks while ensuring compliance with industry standards,
                    regulations, and best practices.
                  </li>
                  <li>
                    Supporting Business Objectives: Aligning IT strategies with
                    organizational goals to drive growth and competitiveness,
                    providing data-driven insights and tools for decision-making
                    and business intelligence.
                  </li>
                  <li>
                    Empowering Users: Offering user-friendly technologies and
                    training programs to enhance digital literacy and
                    productivity, along with responsive and effective IT
                    support.
                  </li>
                  <li>
                    Promoting Collaboration and Integration: Enabling seamless
                    communication and collaboration through integrated IT
                    systems and platforms, partnering with other departments to
                    identify and address technological needs.
                  </li>
                  <li>
                    Ensuring Sustainability and Scalability: Implementing
                    environmentally sustainable IT practices and designing
                    scalable systems to adapt to future growth and technological
                    advancements.
                  </li>
                </ul>
              </section>
              <section></section>
              <section>
                <h2
                  className="mb-4 mt-4 text-4xl tracking-tight font-bold text-gray-900"
                  id="economics"
                >
                  Economics Department
                </h2>
                <h3 className="font-bold text-black">Vision</h3>
                <p>
                  Strive to enhance the department's individuals by improving
                  their competencies using all available resources in an ethical
                  and innovative environment.
                </p>
                <h3 className="font-bold text-black">Mission</h3>
                <p>
                  Contribute to preparing outstanding graduates in economics
                  equipped with the skills and expertise necessary to compete in
                  the public and private sectors in the region and beyond, while
                  conducting innovative scientific research.
                </p>
                <h3 className="font-bold text-black">Objectives</h3>
                <ul>
                  <li>Developing and enhancing economic curricula.</li>
                  <li>
                    Utilizing modern teaching methods that go beyond traditional
                    approaches to the fullest extent possible.
                  </li>
                  <li>
                    Making every effort to raise the academic performance and
                    skill levels of students through the study program.
                  </li>
                  <li>Attracting outstanding teaching staff.</li>
                  <li>
                    Conducting distinguished research, particularly addressing
                    the region's rapidly changing and urgent economic needs at
                    various levels and across all sectors. Expanding faculty
                    members' scientific achievements to elevate the department's
                    reputation to both local and global levels.
                  </li>
                  <li>
                    Actively engaging in providing possible services to the
                    community and introducing it to some economic principles and
                    knowledge to help identify and solve its economic problems.
                  </li>
                </ul>
              </section>

              <section>
                <h2
                  className="mb-4 mt-4 text-4xl tracking-tight font-bold text-gray-900"
                  id="law"
                >
                  Law Department
                </h2>
                <h3 className="font-bold text-black">Vision</h3>
                <p>
                  To achieve a high and advanced academic level in curricula and
                  student preparation that matches the standards of government
                  universities and leading global academic institutions in the
                  field of law and its role in guiding society's progress, both
                  now and in the future.
                </p>
                <h3 className="font-bold text-black">Mission</h3>
                <p>
                  To build a generation of graduates capable of leading Sudanese
                  society and contributing to its development in line with
                  international academic changes, serving the community's
                  development journey, and advancing related legal fields.
                </p>
                <h3 className="font-bold text-black">Objectives</h3>
                <ul>
                  <li>
                    Striving for high academic and scientific standards for
                    students and graduates to compete with academic institutions
                    locally and globally.
                  </li>
                  <li>
                    Continually consulting with scientific institutions and the
                    Ministry to develop approved curricula aimed at improving
                    academic performance.
                  </li>
                  <li>
                    Leveraging the academic expertise within the department to
                    enhance students' practical capabilities, facilitating their
                    integration into available labor markets.
                  </li>
                  <li>
                    Continuously improving students' and graduates' capabilities
                    in academic and field research, fostering advanced knowledge
                    to ease their integration into future labor markets, whether
                    pursuing academic work or further graduate studies.
                  </li>
                  <li>
                    Coordinating with judicial and legal institutions and
                    utilizing local judges' expertise to enhance students' and
                    graduates' capabilities, ensuring practical preparation for
                    integration into the available job market.
                  </li>
                  <li>
                    Coordinating with the Bar Association to organize joint
                    activities, making it easier for graduates to meet labor
                    market requirements.
                  </li>
                  <li>
                    Encouraging students to access legal, judicial, and
                    legislative online resources to enhance their technical and
                    legal skills, broadening their capabilities and increasing
                    their chances in the labor market.
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DepartmentsPage;
