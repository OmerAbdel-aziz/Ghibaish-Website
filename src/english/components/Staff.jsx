import StaffCard from "./sub-components/StaffCard";
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

const Staff = () => {
  return (
    <div
      className="flex w-full flex-col px-10 bg-white relative bottom-10 top-[555px]"
      id="staff"
    >
      <div className="border-b  border-[#1E1E1E]/20 bg-white mx-auto max-w-[95%]">
        <section class=" text-content-base">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div class="mx-auto max-w-screen text-center mb-8 lg:mb-16">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-content-base">
                College Management
              </h2>
              <p class="font-light lg:mb-16 sm:text-xl md:max-w-[80%] max-w-full mx-auto">
                The College Board of Trustees comprises a group of distinguished
                experts, academics, and professionals united by a shared
                commitment to advancing education and scientific research. The
                board is responsible for setting strategic visions and ensuring
                the achievement of the college's goals in delivering
                high-quality education and fostering impactful partnerships with
                both the local and global communities. Under their leadership,
                the college continuously strives for excellence and innovation
                across various academic and professional fields.
              </p>
              <a
                href="/english/staff"
                class=" items-center px-3 py-2 mt-4  text-sm font-medium text-center text-white bg-[#1E1E1E] rounded-lg hover:bg-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300  inline-flex"
              >
                See All Staff
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
              {staff.slice(0, 3).map((staff, index) => (
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
        </section>
      </div>
    </div>
  );
};

export default Staff;
