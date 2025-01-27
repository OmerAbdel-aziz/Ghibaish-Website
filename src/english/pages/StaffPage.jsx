import StaffCard from "../components/sub-components/StaffCard";
import { motion } from "framer-motion";
const staff = [
  {
    name: "Professor Abdel Basit Adam Marioud",
    role: "Chairman of the Board and Founder",
  },
  {
    name: "Professor Ahmed Mohamedain Al-Tom",
    role: "Member of the Board of Trustees",
  },
  {
    name: "Professor Ahmed Ismail Hussein",
    role: "Member of the Board of Trustees",
  },
  { name: "Professor Sayed Fadl Ali Al-Mola", role: "Dean of the College" },
  {
    name: "Dr. Al-Sadiq Mohamed Adam Ali",
    role: "Member of the Board of Trustees",
  },
  {
    name: "Dr. Adam Al-Haj Ahmed Yass",
    role: "Member of the Board of Trustees",
  },
  { name: "Dr. Salah Al-Masri", role: "Member of the Board of Trustees" },
  {
    name: "Prince Abdel Qader Ali Mohamed Obaidallah",
    role: "Member of the Board of Trustees",
  },
  {
    name: "Ms. Inshirah Mohamed Babiker",
    role: "Member of the Board of Trustees",
  },
  {
    name: "Mr. Qusay Abdel Basit Adam",
    role: "Member of the Board of Trustees",
  },
  {
    name: "Sheikh Othman Adam Marioud",
    role: "Member of the Board of Trustees",
  },
];

const StaffPage = () => {
  return (
    <>
      <div
        className="hero absolute top-0 min-h-[50vh] w-full "
        style={{
          backgroundImage: "url(../../assets/images/banner11.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md md:max-w-2xl md:justify-start md:text-left md:items-start md:right-[82%] md:relative px-10 md:px-0">
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
            <h1 className="mb-5 text-5xl font-bold ">College Management</h1>
          </div>
        </div>
      </div>
      <section class="bg-white dark:bg-gray-900 relative top-[300px]">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 ">
          <div class=" text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900">
              Message from the Founder and Chairman of the Board of Trustees
            </h2>
            <p class="mb-4 font-light">
              Ghibaish College of Science and Technology is the first private
              college in West Kordofan State and one of the emerging colleges in
              Sudan. It began its academic journey in the 2017/2018 academic
              year with generous support from the founder and under the
              supervision of the Ministry of Higher Education and Scientific
              Research. The college aligns with Sudan’s future-oriented goals in
              education and scientific research to provide exceptional education
              for the sons and daughters of Ghibaish locality and its
              surrounding areas. Despite being relatively new, the college has
              achieved significant and diverse accomplishments due to meticulous
              planning and the commitment of its administration and teaching
              staff to fulfilling its functional roles. Sincere thanks and
              appreciation are extended to the members of the Board of Trustees
              and the College Council for their relentless efforts in achieving
              the college’s mission and strategic vision. As the Chairman of the
              Board of Trustees, I confidently reaffirm our commitment to
              leadership, guidance, and continuous support of the college as it
              evolves toward becoming Ghibaish University of Science and
              Technology through sound planning. May Allah bless our endeavors,
              ensuring continuous improvement across various fields to achieve
              the college’s vision and mission and gain national and
              international recognition and accreditation for its academic
              programs.
            </p>
            <div className="py-8">
              <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900">
                Message from the Dean
              </h2>
              <p class="mb-4 font-light">
                Since its establishment in 2017, Ghibaish College of Science and
                Technology has been distinguished by a progressive and
                pioneering vision and mission. The college has identified the
                needs of the local community and mapped out the path to progress
                and prosperity, prioritizing academic and technical education.
                Supported by experienced academic and technical staff, the
                college has diligently worked to provide exceptional services
                and modern academic and technical education, securing its
                position among private higher education institutions in Sudan.
                Despite numerous challenges, the college has maintained and
                improved its distinguished level by introducing new
                undergraduate and diploma programs to meet market demands,
                relying on technical facilities and field training programs to
                ensure comprehensive and exceptional services. We pray to
                Almighty Allah for guidance in offering the best to our students
                and the region.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class=" bg-white mx-auto max-w-[80%] relative top-[120px]">
        <div
          class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          lang="ar"
        >
          {staff.map((staff, index) => (
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

export default StaffPage;
