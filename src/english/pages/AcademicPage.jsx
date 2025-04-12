import EnglishHeader from "../components/sub-components/EnglishHeader";

const AcademicPage = () => {
  return (
    <>
      <EnglishHeader title="Academic Guidance" />
      <section class="bg-white  relative ">
        <div class=" px-4 ml-10 max-w-screen-xl lg:px-6">
          <div class="max-w-screen-lg text-gray-500 sm:text-lg  ">
            <p class="mb-4 font-light">
              This involves tasks assigned to faculty members to assist students
              in achieving the best possible academic performance. These tasks
              include guiding students, familiarizing them with academic
              regulations and policies, and addressing any issues—whether social
              or academic—that might negatively affect their academic
              performance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AcademicPage;
