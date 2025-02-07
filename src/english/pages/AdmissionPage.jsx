import { useEffect, useState } from "react";
import EnglishHeader from "../components/sub-components/EnglishHeader";

const AdmissionPage = () => {
  return (
    <>
      <EnglishHeader title="Admission " />
      <section class="bg-white  relative top-[45vh] min-h-screen">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="max-w-screen-lg text-gray-500 sm:text-lg  ">
            <div>
              <h2 className="text-4xl text-black font-bold">This Department</h2>
              <p>
                This department encompasses admissions, registration, and
                academic advising. The Admissions and Registration Section
                provides the following services to students:
              </p>
              <ul>
                <li>
                  Receiving files and lists of applicants seeking enrollment in
                  the college's programs.
                </li>
                <li>Issuing receipts for tuition fee payments.</li>
                <li>
                  Sorting files, reviewing applicant data, and verifying
                  compliance with enrollment requirements.
                </li>
                <li>
                  Preparing admission tests, organizing committees, and
                  reviewing the data and files of accepted students after the
                  admission process is complete.
                </li>
                <li>
                  Assigning accepted students to designated sections based on
                  the academic schedules.
                </li>
                <li>
                  Issuing student ID cards, enrollment certificates, and status
                  statements.
                </li>
                <li>
                  Managing transfer and enrollment procedures to and from the
                  college, including transfers from other higher education
                  institutions.
                </li>
                <li>
                  Preparing for examinations and issuing exam seat numbers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdmissionPage;
