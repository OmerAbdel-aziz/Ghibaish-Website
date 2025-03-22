import { useEffect, useState } from "react";
import EnglishHeader from "../components/sub-components/EnglishHeader";

const AdmissionPage = () => {
  return (
    <>
      <EnglishHeader title="Admission " />
      <section class="bg-white  relative top-[40vh] min-h-screen">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-20 lg:px-6">
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
                <li>
                  <p>
                    Receiving files and lists of names of male and female
                    students applying to join the college programs.
                  </p>
                </li>
                <li>
                  <p>Issuing receipts for payment of tuition fees.</p>
                </li>
                <li>
                  <p>
                    Sorting files and reviewing applicants' data, and verifying
                    the availability of admission requirements.
                  </p>
                </li>
                <li>
                  <p>
                    Preparing admission test procedures, organizing committees,
                    and reviewing data and files of accepted students after the
                    completion of admission processes.
                  </p>
                </li>
                <li>
                  <p>
                    Distributing accepted male and female students to the
                    specified groups in the academic schedules.
                  </p>
                </li>
                <li>
                  <p>
                    Issuing student ID cards, enrollment certificates, and
                    status statements.
                  </p>
                </li>
                <li>
                  <p>
                    Handling transfer procedures and enrollment transfers to and
                    from the college from other higher education institutions.
                  </p>
                </li>
                <li>
                  <p>
                    Preparing and organizing exams and following up on them.
                  </p>
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
