import React from "react";
import Header from "../components/sub-components/Header";

const ArabicAdmissionPage = () => {
  return (
    <>
      <Header title={"القبول والتسجيل"} />
      <section
        class="bg-white dark:bg-gray-900 relative top-[250px] justify-end items-end flex flex-col w-full px-10 "
        lang="ar"
      >
        <div class="py-8 px-4 max-w-screen-xl lg:py-16 lg:px-6 text-end ">
          <div class="w-full text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900">
              يقدم قسم شئون الطلاب الخدمات التالية للطلاب
            </h2>
            <ol>
              <li>
                <p> إعتماد قيد الطلبة الجدد وتسجيلهم </p>
              </li>
              <li>
                <p> إعداد أذون سداد الرسوم الدراسية </p>
              </li>
              <li>
                <p> إستخراج البطاقات الدراسية </p>
              </li>
              <li>
                <p> استخراج شهادات القيد وبيان الحالة </p>
              </li>
              <li>
                <p> إجراءات التحويل ونقل القيد بين الكليات الأخرى </p>
              </li>
              <li>
                <p>الإعداد للامتحانات واستخراج أرقام الجلوس </p>
              </li>
              <li>
                <p>
                  استقبال ملفات وقوائم أسماء الطلاب والطالبات المتقدمين للالتحاق
                  ببرامج الكلية
                </p>
              </li>
              <li>
                <p> استخراج ايصالات سداد الرسوم الدراسية</p>
              </li>
              <li>
                <p>
                  القيام بفرز الملفات ومراجعة بيانات المتقدمين، ومدى توافر شروط
                  الالتحاق
                </p>
              </li>
              <li>
                <p>
                  تجهيز أعمال اختبارات القبول، وتنظيم اللجان، ومراجعة بيانات
                  وملفات المقبولين بعد انتهاء عمليات القبول
                </p>
              </li>
              <li>
                <p>
                  توزيع الطلاب والطالبات المقبولين على الشُعب المحددة في الجداول
                  الدراسية.
                </p>
              </li>
              <li>
                <p>استخراج البطاقات الدراسية وشهادات القيد وبيان الحالة</p>
              </li>
              <li>
                <p>
                  إجراءات التحويل ونقل القيد من والي الكلية من مؤسسات التعليم
                  العالي الأخرى
                </p>
              </li>
              <li>
                <p>الإعداد والتجهيز للامتحانات ومتابعتها</p>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArabicAdmissionPage;
