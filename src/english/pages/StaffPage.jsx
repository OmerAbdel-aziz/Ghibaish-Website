import EnglishHeader from "../components/sub-components/EnglishHeader";
import StaffCard from "../components/sub-components/StaffCard";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabase";
import AbdelBasit from "../../../public/assets/images/AbdelBasit.jpg";
import Altom from "../../../public/assets/images/Altom.jpg";
import Hussein from "../../../public/assets/images/Hussein.jpg";
import Fadl from "../../../public/assets/images/Fadl.jpg";
import Avatar from "../../../public/assets/images/Avatar.webp";

// const staff = [
//   {
//     name: "Professor Abdel Basit Adam Marioud",
//     role: "Chairman of the Board and Founder",
//     image: AbdelBasit,
//   },
//   {
//     name: "Professor Ahmed Mohamedain Al-Tom",
//     role: "Member of the Board of Trustees",
//     image: Altom,
//   },
//   {
//     name: "Professor Ahmed Ismail Hussein",
//     role: "Member of the Board of Trustees",
//     image: Hussein,
//   },
//   {
//     name: "Professor Sayed Fadl Ali Al-Mola",
//     role: "Dean of the College",
//     image: Fadl,
//   },
//   {
//     name: "Dr. Al-Sadiq Mohamed Adam Ali",
//     role: "Member of the Board of Trustees",
//     image: Avatar,
//   },
//   {
//     name: "Dr. Adam Al-Haj Ahmed Yass",
//     role: "Member of the Board of Trustees",
//     image: Avatar,
//   },
//   {
//     name: "Dr. Salah Al-Masri",
//     role: "Member of the Board of Trustees",
//     image: Avatar,
//   },
//   {
//     name: "Prince Abdel Qader Ali Mohamed Obaidallah",
//     role: "Member of the Board of Trustees",
//     image: Avatar,
//   },
//   {
//     name: "Ms. Inshirah Mohamed Babiker",
//     role: "Member of the Board of Trustees",
//     image: Avatar,
//   },
//   {
//     name: "Mr. Qusay Abdel Basit Adam",
//     role: "Member of the Board of Trustees",
//     image: Avatar,
//   },
//   {
//     name: "Sheikh Othman Adam Marioud",
//     role: "Member of the Board of Trustees",
//     image: Avatar,
//   },
// ];

const StaffPage = () => {
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
        .select("name_en, role_en, image_url")
        .order("id", { ascending: true });

      if (error) throw error;

      const formattedStaff = data.map((member) => ({
        name: member.name_en,
        role: member.role_en,
        image: member.image_url,
      }));

      setStaff(formattedStaff);
    } catch (error) {
      console.error("Error fetching staff:", error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <EnglishHeader title="College Management" />
      <section class="bg-white dark:bg-gray-900 relative items-start justify-center ml-8">
        <div class="px-4 text-start max-w-screen-xl ">
          <div class=" text-gray-800 sm:text-lg dark:text-gray-600">
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
      <div class=" pb-10 mx-auto max-w-[70%] md:max-w-[90%] relative ">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
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

export default StaffPage;
