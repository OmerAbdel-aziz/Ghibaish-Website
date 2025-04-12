import React from "react";
import Center2 from "../../../public/assets/images/Center2.png";
import Center1 from "../../../public/assets/images/CenterAR.png";
import Header from "../components/sub-components/Header";
import BookCard from "../components/sub-components/BookCard";
import gum from "../../../public/assets/images/gum.jpg";
import blackCumin from "../../../public/assets/images/blackCumin.jpg";
import Sclerocarya from "../../../public/assets/images/Sclerocarya.webp";
import candy from "../../../public/assets/images/candy.jpg";
import food from "../../../public/assets/images/food.jpg";
import computer from "../../../public/assets/images/computer.jpg";

const Books = [
  {
    title: "الصمغ العربي",
    image: gum,
    link: "https://www.google.com",
  },
  {
    title: "الحبة السوداء",
    image: blackCumin,
    link: "https://www.google.com",
  },
  {
    title: " البقلة السودانية",
    image: Sclerocarya,
    link: "https://www.google.com",
  },
  {
    title: "تكنولوجيا تصنيع القند",
    image: candy,
    link: "https://www.google.com",
  },
  {
    title: " مبادئ تحليل الأغذية",
    image: food,
    link: "https://www.google.com",
  },
];

const ArabicCentersPage = () => {
  return (
    <>
      <Header title="مراكز الكلية " />
      <section
        class="bg-white dark:bg-gray-900 relative   justify-end items-end flex flex-col w-full px-10 "
        lang="ar"
      >
        <div class="py-8 px-4 max-w-screen-xl lg:py-16 lg:px-6 text-end ">
          <div class="w-full text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900">
              الأبحاث والمشاريع البحثية
            </h2>
            <h4>
              <span className="font-bold text-black">
                نفذت كلية غبيش للعلوم والتكنولوجيا مجموعة أبحاث يمكن تقسيمها
                كالتالي
              </span>
            </h4>
            <ul className="gap-2">
              <li>مشاريع تخرج الطلاب من مختلف التخصصات</li>
              <li>مشاريع بحثية نفذها أعضاء هيئة التدريس والأعضاء المشاركين</li>
              <li>مشاريع بحثية نفذها رئيس مجلس الأمناء باسم الكلية</li>
              <li>أوراق علمية نشرت باسم كلية غبيش</li>
              <li>أبواب في كتب تحمل اسم كلية غبيش</li>
              <li>كتب منشورة تحمل اسم كلية غبيش كاسم مرجعي للمشاركين</li>
            </ul>
          </div>
          <div className="flex justify-center items-center w-full">
            <div class="mx-auto grid w-full  grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              {Books.map((book, index) => (
                <BookCard
                  key={index}
                  title={book.title}
                  image={book.image}
                  link={book.link}
                />
              ))}
            </div>
          </div>
        </div>
        <div class="py-8 px-4 max-w-screen-xl lg:py-16 lg:px-6 text-end ">
          <div class="w-full text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900">
              مركز المخزون المعرفي
            </h2>
            <div className="flex justify-center py-10">
              <img src={Center2} alt="Center2" width={180} />
            </div>
            <h4 className="text-black">
              <span className="font-bold text-black">: خلفية</span>
            </h4>
            <p>
              {" "}
              المجتمع السوداني عامة وبغرب كردفان علي وجه الخصوص لديه ثروة من
              المخزون المعرفي متقدمة على مر القرون من أجل سبل العيش المستدامة.
              وهي تظهر في مجالات مختلفة تشمل التكيف مع تغير المناخ، وإدارة
              الموارد الطبيعية، والأمن الغذائي، والصحة، والتعليم، والهندسة
              المعمارية، واللغة، وتحول الصراع، والحكم، وما إلى ذلك. وقد تم تهميش
              المخزون السوداني باعتباره أقل شأنا في البحث عن حلول مستدامة
              للتحديات الإنمائية على مر السنين. ومع ذلك، هناك حاليا إدراك متزايد
              داخل السودان وفي افريقيا عامة، وخاصة بين صانعي السياسات والباحثين
              والأكاديميين والوكالات الإنمائية والمجتمع المدني أن قدرة البلد على
              بناء وتعبئة نظم المعرفة المتاحة بين شعبها من أجل التنمية
              الاجتماعية والاقتصادية هو أمر أساسي مثل توافر الموارد المادية
              والمالية.
            </p>
            <h4>
              <span className="font-bold text-black"> :الرؤية</span>
            </h4>
            <p>
              {" "}
              ان يكون مركز المخزون المعرفي والتراث مركزا عالميا لحشد أبحاث
              المخزون المعرفي للمنطقة والتدريب على الدراسات العليا والمشاركة
              المجتمعية من خلال الاعتراف والتنمية والحماية وتأكيد أنظمة المخزون
              المعرفي في كردفان لتحسين نوعية الحياة
            </p>
            <h4 className="text-black">
              <span className="font-bold text-black"> :الرسالة</span>
            </h4>
            <p>
              {" "}
              مجالات المركز هي التدريب والدراسات والتنمية مع التركيز على الأمن
              الغذائي، الطب التقليدي؛ والتنوع البيولوجي، وإدارة البيئة
            </p>
            <h4 className="text-black">
              <span className="font-bold text-black"> :البحوث</span>
            </h4>
            <p>
              {" "}
              يقوم مركز المخزون المعرفي بتبني وتنفيذ برامج بحثية بالتعاون مع
              الجامعات والمراكز السودانية والعالمية لتسليط الضوء وترقية المخزون
              المعرفي استكشاف طرق جديدة للمعرفة والإنتاج المعرفي من أجل التنمية
              المستدامة وتحسين سبل كسب العيش في المجتمع.
            </p>
            <h4 className="text-black">
              <span className="font-bold text-black">:التواصل</span>
            </h4>
            <p>
              {" "}
              يتعاون مركز المخزون المعرفي مع أفراد وجماعات ومؤسسات مرموقة داخل
              السودان وخارجه لتطوير وتحسين نوعية الحياة، لتعزيز القدرة البحثية،
              وذلك بتنظيم حلقات عمل وندوات منتظمة لطلاب الدراسات العليا
              والباحثين لتعزيز الربط الشبكي.
            </p>
            <h4 className="text-black">
              <span className="font-bold text-black">
                وتتمثل الأهداف المحددة للمركز فيما يلي
              </span>
            </h4>
            <ul className="gap-2">
              <li>
                المساهمة في التنمية الاقتصادية الوطنية والتخفيف من وطأة الفقر من
                خلال استكشاف الميزة النسبية للمنطقة في الموارد الطبيعية ونظم
                المعارف الأصلية من خلال البحوث المتعددة التخصصات للاشتراك في
                برامج البحث والتكنولوجيا والابتكار في مجال التدريب (الماجستير،
                والدكتوراه وما بعد الدكتوراه) التي من شأنها أن تساعد على توليد
                التفاعل والتآزر بين التخصصات والاستفادة من الفرص التي تتوفر الآن
                في العصر الحديث.
              </li>
              <li>
                يقوم المركز يتبني عمليات مبتكرة لصالح المجتمع المحلي من خلال
                انشاء شبكة من مجموعة علماء الذين سيكون لهم علاقات متبادلة مع
                المجتمعات الريفية والقطاع الرسمي على السواء.
              </li>
              <li>
                دعم التحول النوعي في النهج التربوية لضمان أن المجتمعات المحلية
                التي تتمتع بالموارد الطبيعية سوف تشارك بنشاط في المبادرات
                البحثية التطبيقية والأساسية لأجيال الحاضر والمستقبل من العلماء
                الذين سوف تعزز الناس - لتعلم الناس.
              </li>
              <li>
                أن يكون مركزا فكريا وثقافيا يعتمد بشكل عام على قاعدة المعارف
                الأصلية ويعزز التراث الاجتماعي والثقافي للمنطقة.
              </li>
            </ul>
            <p></p>
          </div>
        </div>
        <div class="py-8 px-4 max-w-screen-xl lg:py-16 lg:px-6 text-end ">
          <div class="w-full text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900">
              مركز ام قصي للمرأة والطفل
            </h2>
            <div className="flex justify-center py-10">
              <img src={Center1} alt="Center2" width={180} />
            </div>
            <h4 className="text-black">
              <span className="font-bold text-black">: خلفية</span>
            </h4>
            <p>
              {" "}
              لأجل غد أجمل للنساء وللأطفال ولأمهات رساليات ولأطفال اصحاء نجباء
              ولأجل كل النجاحات المنشودة في تنمية المرأة والطفل وجد مركز ام قصي
              للمرأة والطفل التابع لكلية غبيش للعلوم والتكنولوجيا، بمدينة غبيش
              ولاية غرب كردفان.
            </p>
            <h4>
              <span className="font-bold text-black"> :الرؤية</span>
            </h4>
            <p>
              {" "}
              تتمثل رؤيتنا في ترسيخ مفهوم التنمية المستدامة للمرأة والطفل وتوسيع
              نطاق الخيارات المتاحة لكل امرأة وطفل بمنطقة غبيش بغرب كردفان بما
              يؤهلهم ويمكنهم من المشاركة المسؤولة في تنفيذ المشاريع الاقتصادية
              والتنموية الطموحة بهدف بناء مجتمع آمن ومتقدم بالمعرفة، العلم،
              العمل والإنتاج.
            </p>
            <h4 className="text-black">
              <span className="font-bold text-black"> :الرسالة</span>
            </h4>
            <p>
              {" "}
              العمل على إعلاء معاني تنمية المرأة والطفل والاهتمام بالأمومة
              والطفولة والمساعدة علي رعاية المرأة والطفل
            </p>
            <h4 className="text-black">
              <span className="font-bold text-black">
                وتتمثل الأهداف المحددة للمركز فيما يلي
              </span>
            </h4>
            <ul className="gap-2">
              <li>
                تخطيط البرامج والمشاريع الموجهة لقطاعات المرأة والفتيات والطفولة
                والاشراف والمراقبة والتنسيق لهذه المشاريع.
              </li>
              <li>
                {" "}
                تأسيس البنيات اللازمة لتنفيذ البرامج بالتعاون مع الجهات الحكومية
                والقطاع الخاص ومنظمات الامم المتحدة والمنظمات الطوعية.
              </li>
              <li>
                تنفيذ الدراسات الميدانية والبحوث في مجالات المرأة والتنمية
                والطفولة لتوفير المؤشرات والإحصائيات الدقيقة المطلوبة لرسم
                السياسات وتخطيط البرامج والمشاريع ذات الأولوية ولبناء قاعدة
                معلومات شاملة.
              </li>
              <li>
                العمل على تمكين المرأة وتلبية احتياجاتها الأساسية في التعليم
                والصحة والتدريب والتأهيل وبناء قدراتها الذاتية والمهنية في مختلف
                المجالات التنموية.
              </li>
              <li>
                تعزيز الدور التوعوي والتثقيفي بالحقوق والواجبات التي كفلها الدين
                الإسلامي الحنيف للمرأة وبقدرتها للمشاركة كمواطنة في خدمة
                مجتمعها.
              </li>
            </ul>
            <h4 className="text-black">
              <span className="font-bold text-black">مشاريع المركز</span>
            </h4>
            <h4 className="text-black">
              <span className="font-bold text-black">
                أولاً : مشاريع تنمية المرأة
              </span>
            </h4>
            <ul className="gap-2">
              <li>
                حلقات تعليم القرآن الكريم ودروس العبادات والفقه يقدم المركز خدمة
                تعليم وتحفيظ القرآن الكريم من خلال الحلقات للدارسات من مختلف
                الأعمار لدراسة القرآن حفظاً وتجويداً وتفسيراً وأيضاً قراءات في
                التوحيد والفقه والسيرة النبوية الشريفة.
              </li>
              <li>
                الصحة: يقدم المركز خدمات توعوية فى مجال الصحة الانجابية (الحمل،
                التغذية والتحصين) و فى مجال الكشف المبكر عن سرطان الثدى وسرطان
                عنق الرحم
              </li>
              <li>
                التعليم: يقدم المركز خدمات محو الامية عبر فصول للنساء بالمدينة
                والقري المجاورة
              </li>
              <li>
                مشاريع مدره للدخل: يقدم المركز بالتعاون مع الشركاء برامج تثقيفية
                عن زيادة الدخل اعتمادا علي المخزون المعرفي المحلي للمرأة الريفية
                مثل الاشغال اليدوية في مجال نسج الصوف واعمال السعف وزراعة وانتاج
                الفواكه البرية .
              </li>
            </ul>
            <h4 className="text-black">
              <span className="font-bold text-black">
                ثانياً: مشاريع تنمية الطفولة
              </span>
            </h4>
            <p>يقوم المركز بتنفيذ مشروعات تخدم الاطفال من خلال:</p>
            <ul className="gap-2">
              <li>الاهتمام برياض الأطفال</li>
              <li>حماية الاطفال من التحرش الجنسى</li>
            </ul>
            <h4 className="text-black">
              <span className="font-bold text-black">
                ثالثاً : مشاريع تنمية الفتيات
              </span>
            </h4>
            <p>يقوم المركز بتنفيذ مشروعات تخدم الفتيات من خلال:</p>
            <ul className="gap-2">
              <li>
                التعليم بمساعدة الفاقد التربوي من الفتيات بإيجاد فرص دراسية{" "}
              </li>
              <li>الكورسات الصيفية لطالبات مرحلتي الاساس والثانوي</li>
              <li>
                تنمية مهارات التواصل والاتصال لخلق مدربات مستقبل قادرات علي
                تنفيذ اهداف المركز
              </li>
            </ul>
          </div>
        </div>
        <div class="py-8 px-4 max-w-screen-xl lg:py-16 lg:px-6 text-end ">
          <div class="w-full text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900">
              معمل الحاسوب
            </h2>
            <div className="flex justify-center py-10">
              <img src={computer} alt="Center2" width={180} />
            </div>
            <h4 className="text-black">
              <span className="font-bold text-black">
                أهداف معمل الحاسوب بالكلية
              </span>
            </h4>
            <ul className="gap-2">
              <li>
                تقديم الخدمات للطلاب وأعضاء هيئة التدريس ومعاونيهم والباحثين في
                مجال استخدام الحاسب الآلي لانجاز مهام البحث والتعلم والتدريس
                والتدريب.{" "}
              </li>
              <li>
                توفير فرصة الاطلاع للطلاب على شبكة المعلومات والاستفادة من كل
                جديد في تخصصاتهم المختلفة.
              </li>
              <li>
                توفير خدمات الكتابة والطباعة والتصميم للأبحاث لكل الفئات
                المستهدفة من خدمات المعمل.
              </li>

              <li>
                توفير فرصة التعليم الذاتي للطلاب واستخدام تكنولوجيا الحاسب الآلي
                في العملية التعليمية.
              </li>
            </ul>
            <h4 className="text-black">
              <span className="font-bold text-black">
                مكونات معمل الحاسوب بالكلية
              </span>
            </h4>
            <p>
              معمل الحاسب الآلي والتعليم الالكتروني مزود بأحدث الأجهزة للتطبيق
              بما يتواكب مع أحدث البرامج في مجال تكنولوجيا المعلومات، حيث يتوفر
              جهاز حاسب آلي لكل متدرب
            </p>
            <ul>
              <li>
                خمسة و عشرون جهاز حاسب آلي متصلة بشبكة الانترنت ومزودة ببرامج
                متخصصة
              </li>
              <li>طابعة</li>
              <li>بروجكتر</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArabicCentersPage;
