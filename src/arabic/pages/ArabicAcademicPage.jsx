import React from "react";
import Header from "../components/sub-components/Header";

const ArabicAcademicPage = () => {
  return (
    <>
      <Header title={"الارشاد الأكاديمي"} />
      <section
        class="bg-white dark:bg-gray-900 relative  justify-end items-end flex flex-col w-full px-10 "
        lang="ar"
      >
        <div class="py-8  px-4 max-w-screen-xl lg:px-6 text-end ">
          <div class="w-full text-gray-500 sm:text-lg dark:text-gray-400">
            <p class="mb-4 text-lg tracking-tight text-gray-600">
              يتعلق هذا القسم بالمهام المُسندة إلى أعضاء هيئة التدريس لمساعدة
              الطلاب على تحقيق أفضل أداء أكاديمي ممكن. تشمل هذه المهام توجيه
              الطلاب، وتعريفهم باللوائح والسياسات الأكاديمية، ومعالجة أي مشكلات
              — سواء كانت اجتماعية أو أكاديمية — قد تؤثر سلبًا على أدائهم
              الأكاديمي.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArabicAcademicPage;
