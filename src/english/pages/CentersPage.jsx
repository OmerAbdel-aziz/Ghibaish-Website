import Center2 from "../../../public/assets/images/Center2.png";
import CenterEn from "../../../public/assets/images/CenterEn.png";
import EnglishHeader from "../components/sub-components/EnglishHeader";
import EnglishBookCard from "../components/sub-components/EnglishBookCard";
import gum from "../../../public/assets/images/gum.jpg";
import blackCumin from "../../../public/assets/images/blackCumin.jpg";
import Sclerocarya from "../../../public/assets/images/Sclerocarya.webp";
import candy from "../../../public/assets/images/candy.jpg";
import food from "../../../public/assets/images/food.jpg";
import computer from "../../../public/assets/images/computer.jpg";
const Books = [
  {
    title: "Gum Arabic",
    image: gum,
    link: "https://www.google.com",
  },
  {
    title: "Black Cumin",
    image: blackCumin,
    link: "https://www.google.com",
  },
  {
    title: "  Sclerocarya Birrea",
    image: Sclerocarya,
    link: "https://www.google.com",
  },
  {
    title: "    Candy Processing Technology",
    image: candy,
    link: "https://www.google.com",
  },
  {
    title: "    Food Processing Technology",
    image: food,
    link: "https://www.google.com",
  },
];

const CentersPage = () => {
  return (
    <>
      <EnglishHeader title="Research Centers" />
      <section
        className="bg-white relative py-8 justify-start items-start flex flex-col w-full px-10 text-left"
        lang="en"
      >
        <div className=" px-4 max-w-screen-xl lg:px-6 text-left">
          <div className="w-full text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 text-left">
              Research and Projects
            </h2>
            <h4>
              <span className="font-bold text-black">
                Ghibaish College of Science and Technology has conducted several
                research projects, categorized as follows:
              </span>
            </h4>
            <ul className="gap-2">
              <li>Student graduation projects across various disciplines.</li>
              <li>
                Research conducted by faculty members and affiliated staff.
              </li>
              <li>
                Research conducted by the Chairman of the Board of Trustees on
                behalf of the college.
              </li>
              <li>Academic papers published under Ghibaish College's name.</li>
              <li>Chapters in books credited to Ghibaish College.</li>
              <li>
                Books published with Ghibaish College as a reference for
                contributors.
              </li>
            </ul>
          </div>
          <div
            class="mx-auto mt-10 grid w-full grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-5"
            lang="ar"
          >
            {Books.map((book, index) => (
              <EnglishBookCard
                key={index}
                title={book.title}
                image={book.image}
                link={book.link}
              />
            ))}
          </div>
        </div>
        <div className="py-8 px-4 max-w-screen-xl lg:py-16 lg:px-6 text-left">
          <div className="w-full text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 text-left">
              Knowledge Repository Center
            </h2>
            <div className="flex justify-center py-10">
              <img src={Center2} alt="Center2" width={180} />
            </div>
            <h4 className="text-black text-left">
              <span className="font-bold text-black">Background:</span>
            </h4>
            <p className="text-left">
              The Sudanese society, particularly in West Kordofan, has a wealth
              of traditional knowledge accumulated over centuries, enabling
              sustainable livelihoods. This knowledge spans diverse fields,
              including climate adaptation, natural resource management, food
              security, health, education, architecture, language, conflict
              resolution, and governance. Historically, such knowledge has been
              marginalized. However, there is now growing recognition across
              Sudan and Africa, particularly among policymakers, researchers,
              academics, development agencies, and civil society, that building
              and mobilizing the nation's knowledge systems for socio-economic
              development is as essential as physical and financial resources.
            </p>
            <h4>
              <span className="font-bold text-black">Vision:</span>
            </h4>
            <p>
              To be a global hub for mobilizing regional knowledge research,
              postgraduate training, and community engagement, recognizing,
              developing, protecting, and validating knowledge systems in
              Kordofan to enhance quality of life.
            </p>
            <h4 className="text-black">
              <span className="font-bold text-black">Mission:</span>
            </h4>
            <p>
              The center focuses on training, research, and development in areas
              such as food security, traditional medicine, biodiversity, and
              environmental management.
            </p>
            <h4 className="text-black">
              <span className="font-bold text-black">Research:</span>
            </h4>
            <p>
              The Knowledge Repository Center adopts and implements research
              programs in collaboration with Sudanese and international
              universities and centers. These programs aim to highlight and
              enhance the knowledge repository, exploring new methods for
              knowledge acquisition and production to promote sustainable
              development and improve community livelihoods.
            </p>
            <h4 className="text-black">
              <span className="font-bold text-black">Collaboration:</span>
            </h4>
            <p>
              The Knowledge Repository Center works with individuals, groups,
              and prestigious institutions locally and internationally to
              improve the quality of life and enhance research capacity. It
              organizes regular workshops and seminars for postgraduate students
              and researchers to foster networking opportunities.
            </p>
            <h4 className="text-black">
              <span className="font-bold text-black">Objectives:</span>
            </h4>
            <p>
              The center addresses global knowledge and research related to the
              knowledge repository with the following goals:
            </p>
            <ul className="gap-2">
              <li>
                Meeting the academic needs of students, scholars, researchers,
                institutions, and organizations.
              </li>
              <li>
                Recognizing and integrating traditional knowledge into academic
                frameworks.
              </li>
              <li>
                Supporting and preserving the indigenous knowledge and oral
                traditions of local communities.
              </li>
            </ul>
            <h4 className="text-black">
              <span className="font-bold text-black">Specific Objectives:</span>
            </h4>
            <ul className="gap-2">
              <li>
                Contribute to national economic development and poverty
                alleviation by exploring the region's comparative advantages in
                natural resources and indigenous knowledge. This is achieved
                through multidisciplinary research programs, technology, and
                innovation training (master's, doctoral, and post-doctoral
                programs).
              </li>
              <li>
                Adopt innovative processes for the benefit of the local
                community by creating a network of scholars who maintain
                reciprocal relationships with rural communities and the formal
                sector.
              </li>
              <li>
                Support transformative educational approaches to ensure active
                participation of resource-rich local communities in applied and
                fundamental research initiatives. These efforts aim to empower
                future generations of scientists who will contribute to
                knowledge-based learning.
              </li>
              <li>
                Serve as a cultural and intellectual hub that promotes
                indigenous knowledge and enhances the social and cultural
                heritage of the region.
              </li>
            </ul>
          </div>
        </div>
        <div className=" px-4 max-w-screen-xl lg:px-6 text-left">
          <div className="w-full text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 text-left">
              Um Gusai Center for Women and Children
            </h2>
            <div className="flex justify-center py-10">
              <img src={CenterEn} alt="Center1" width={180} />
            </div>
            <h4 className="text-black text-left">
              <span className="font-bold text-black">Overview:</span>
            </h4>
            <p>
              For a brighter future for women, children, mothers, and healthy,
              gifted children, the Um Gusai Center for Women and Children,
              affiliated with Ghibaish College of Science and Technology, was
              established in Ghibaish, West Kordofan State.
            </p>
            <h4>
              <span className="font-bold text-black">Vision:</span>
            </h4>
            <p>
              Our vision is to instill the concept of sustainable development
              for women and children and to expand the options available to
              every woman and child in the Ghibaish region. This empowers them
              to responsibly participate in implementing ambitious economic and
              developmental projects, aiming to build a secure and progressive
              society grounded in knowledge, education, work, and production.
            </p>
            <h4 className="text-black">
              <span className="font-bold text-black">Mission:</span>
            </h4>
            <p>
              To uphold the values of women's and children's development,
              focusing on motherhood and childhood, and providing care and
              support for women and children.
            </p>
            <h4 className="text-black">
              <span className="font-bold text-black">Goals:</span>
            </h4>
            <ul className="gap-2">
              <li>
                Planning, supervising, monitoring, and coordinating programs and
                projects targeting women, girls, and children.
              </li>
              <li>
                Establishing the necessary infrastructure to implement programs
                in collaboration with governmental bodies, the private sector,
                United Nations organizations, and voluntary organizations.
              </li>
              <li>
                Conducting field studies and research on women, development, and
                childhood to provide accurate indicators and statistics for
                policy-making and prioritizing programs and projects.
              </li>
              <li>
                Empowering women and meeting their essential needs in education,
                health, training, and capacity building across various
                developmental fields.
              </li>
              <li>
                Enhancing awareness and educational roles regarding the rights
                and responsibilities Islam provides to women and their ability
                to contribute as citizens in serving their communities.
              </li>
            </ul>
            <h4 className="text-black">
              <span className="font-bold text-black">Center Projects:</span>
            </h4>
            <h4 className="text-black">
              <span className="font-bold text-black">
                Women Development Projects:
              </span>
            </h4>
            <ul className="gap-2">
              <li>
                Religious Education: Offering Quran study and memorization
                classes, including lessons in worship, jurisprudence, and the
                Prophet's biography, for women of all ages.
              </li>
              <li>
                Health Awareness: Providing services related to reproductive
                health (pregnancy, nutrition, and immunization) and early
                detection of breast and cervical cancer.
              </li>
              <li>
                Literacy Programs: Offering literacy classes for women in both
                urban and rural areas.
              </li>
              <li>
                Income-Generating Projects: Educating women on ways to increase
                income, focusing on utilizing indigenous knowledge, such as wool
                weaving, palm frond crafts, and cultivating and producing wild
                fruits.
              </li>
            </ul>
            <h4 className="text-black">
              <span className="font-bold text-black">
                Child Development Projects:
              </span>
            </h4>
            <ul className="gap-2">
              <li>
                Kindergarten Support: Enhancing early childhood education
                infrastructure.
              </li>
              <li>
                Child Protection: Focusing on protecting children from sexual
                harassment.
              </li>
            </ul>
            <h4 className="text-black">
              <span className="font-bold text-black">
                Girl Development Projects:
              </span>
            </h4>
            <ul className="gap-2">
              <li>
                Assisting girls who missed educational opportunities by
                providing them with schooling options.
              </li>
              <li>
                Organizing summer courses for primary and secondary school
                girls.
              </li>
              <li>
                Developing communication and leadership skills to prepare future
                trainers capable of achieving the center's goals.
              </li>
            </ul>
          </div>
        </div>
        <div className="py-8 px-4 max-w-screen-xl lg:py-16 lg:px-6 text-left">
          <div className="w-full text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 text-left">
              Computer Lab
            </h2>
            <div className="flex justify-center py-10">
              <img src={computer} alt="Center2" width={180} />
            </div>
            <h4 className="text-black text-left">
              <span className="font-bold text-black">
                Objectives of the Computer Lab at the College:
              </span>
            </h4>
            <ul className="gap-2">
              <li>
                Providing services to students, faculty members, their
                assistants, and researchers in utilizing computers for research,
                learning, teaching, and training purposes.Providing students
                with the necessary skills to use computers and the internet.
              </li>
              <li>
                Offering students access to the internet to stay updated with
                the latest developments in their respective fields.
              </li>
              <li>
                Providing writing, printing, and design services for research
                work to all target groups benefiting from the lab's services.
              </li>
              <li>
                Enabling self-learning for students and integrating computer
                technology into the educational process.
              </li>
            </ul>
            <h4>
              <span className="font-bold text-black">
                Components of the Computer Lab at the College:
              </span>
            </h4>
            <p>
              The computer and e-learning lab is equipped with the latest
              devices to keep up with the most advanced software in the field of
              information technology. Each trainee is provided with a dedicated
              computer, and the lab is equipped with the latest training tools
              in the field of IT, including:
            </p>
            <ul>
              <li>25 computers</li>
              <li>1 printer</li>
              <li>Projecter</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default CentersPage;
