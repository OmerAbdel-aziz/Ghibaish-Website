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
          <div className="font-light text-gray-500 sm:text-lg ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Explore our Research Centers & Institutes
            </h2>
            <p className="mb-4">
              The institutes and research centers at our college are a
              cornerstone for fostering innovation and academic excellence. We
              believe that scientific research is the driving force behind
              knowledge development and addressing local and global challenges.
              Through our specialized centers, we provide an advanced research
              environment that combines the latest technologies with outstanding
              academic expertise. This enables researchers to conduct pioneering
              studies in diverse fields such as applied sciences, humanities,
              and other interdisciplinary domains. These centers work to enhance
              collaboration between the college and local and international
              research institutions, offering opportunities for students and
              academics to participate in innovative research projects. We also
              strive to align scientific research with community needs,
              providing practical solutions that contribute to sustainable
              development. Join us to explore a world of research opportunities
              that inspire creativity and unlock potential.{" "}
            </p>

            <a
              href="/english/centers"
              class="inline-flex items-center mt-16 px-3 py-2 text-sm font-medium text-center text-white bg-[#1E1E1E] rounded-lg hover:bg-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Learn More
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
        </div>
      </section>
    </div>
  );
};

export default Centers;
