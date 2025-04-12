import React from "react";

const ArabicDepartmentsPage = () => {
  return (
    <div className="relative min-h-screen">
      <div
        className="hero absolute  w-full"
        style={{
          backgroundImage: "url(../../assets/images/header2.jpg)",
        }}
        lang="ar"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md md:max-w-2xl md:justify-END md:text-right md:items-end md:left-[8vw] lg:left-[8vw] xl:left-[24vw] md:relative px-10 md:px-0">
            <div className="py-8">
              <a
                href="/"
                class="hidden md:inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1E1E1E] rounded-lg hover:bg-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                <span className="ml-2"> عودة الى الصفحة الرئيسية</span>
                <svg
                  class=" w-3.5 h-3.5 ms-2"
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
            <h1 className="mb-5 text-4xl font-bold">أقسام الكلية</h1>
            <nav>
              <ul className="space-x-4">
                <li className="inline-block">
                  <a
                    href="#law"
                    className="text-lg font-semibold text-white hover:text-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    قسم القانون
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="#economics"
                    className="text-lg font-semibold text-white hover:text-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    {" "}
                    قسم الاقتصاد
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="#it"
                    className="text-lg font-semibold text-white hover:text-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    قسم تقنية المعلومات
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="#management"
                    className="text-lg font-semibold text-white hover:text-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    قسم العلوم الادارية
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <section
        class="bg-white dark:bg-gray-900 relative top-[250px] justify-end items-end flex flex-col w-full px-10 "
        lang="ar"
      >
        <div class="py-8 px-4 max-w-screen-xl lg:py-16 lg:px-6 text-end ">
          <div
            class="w-full text-gray-500 sm:text-lg dark:text-gray-400"
            id="management"
          >
            <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900">
              قسم العلوم الادارية
            </h2>
            <p class="mb-4 font-light">
              نشأ قسم العلوم الإدارية والمالية مع نشأة الكلية عام 2017م تحت اسم
              قسم العلوم الإدارية ويضم تخصصات الإدارة والمحاسبة وذلك سعياً وراء
              مواكبة التقدم التكنولوجي الهائل في مجال الأعمال والمحاسبة، وفي نفس
              المجال يسعى القسم لتطوير البرامج الحالية واستحداث برامج جديدة
              تتلاءم واحتياجات السوق الحالية والمستقبلية ومتطلبات سوق العمل
              بالمنطقة. يضم القسم مجموعة من أعضاء هيئة التدريس ذوي الكفاءة
              والمؤهلين من حملة الدرجات العلمية العالية، ويسعى القسم إلى التطوير
              والتحديث في المناهج والخطط الدراسية بما يتماشى مع التقدم العلمي
              والتكنولوجي في المجالات الادارية، ويسعى كذلك إلى تطوير امكانياته
              العلمية بشكل دائم بحيث يمكن تقديم خدمات فنية واستشارية مختلفة
              للمؤسسات والوزارات والمجتمع بمحلية غبيش. <br />
              توفير تعليم
            </p>
            <h4 className="text-black">
              <span className="font-bold text-black"> :الرسالة</span>
            </h4>
            <p>
              {" "}
              تقديم حلول وخدمات تكنولوجيا المعلومات المتطورة التي تمكن المؤسسات
              من تحقيق أهدافها. ومن خلال الابتكار والتعاون والالتزام بالتميز،
              نهدف إلى توفير حلول تقنية آمنة وقابلة للتطوير ومستدامة تعمل على
              تحسين الإنتاجية والاتصال.
            </p>
            <h4>
              <span className="font-bold text-black"> :الرؤية</span>
            </h4>
            <p>
              {" "}
              أن يكون القسم رائدا عالميًا في الاستفادة من التكنولوجيا لدفع
              الابتكار والكفاءة والتحول، وتمكين المؤسسات والأفراد من الازدهار في
              عالم رقمي أولاً.
            </p>
            <h4 className="text-black">
              <span className="font-bold"> :الأهداف</span>
            </h4>
            <p>
              <ul className="">
                <li>
                  <span className="font-semibold text-gray-600">
                    دفع الابتكار التكنولوجي
                  </span>
                  <br />
                  <p>
                    البقاء في طليعة التقنيات والاتجاهات الناشئة لتقديم حلول
                    مبتكرة. تعزيز ثقافة الإبداع والتجريب داخل فريق تكنولوجيا
                    المعلومات.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-gray-600">
                    :ضمان التميز التشغيلي
                  </span>
                  <br />
                  <p>
                    توفير بنية تحتية وخدمات موثوقة وعالية الأداء لتكنولوجيا
                    المعلومات لدعم العمليات التنظيمية. التحسين المستمر للعمليات
                    لتعزيز الكفاءة وتقليل وقت التوقف عن العمل.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-gray-600">
                    :تعزيز الأمن والامتثال
                  </span>
                  <br />
                  <p>
                    تنفيذ تدابير قوية للأمن السيبراني لحماية البيانات والأنظمة
                    والشبكات. ضمان الامتثال لمعايير الصناعة واللوائح وأفضل
                    الممارسات.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-gray-600">
                    :دعم أهداف العمل
                  </span>
                  <br />
                  <p>
                    مواءمة استراتيجيات تكنولوجيا المعلومات مع الأهداف التنظيمية
                    لدفع النمو والقدرة التنافسية. توفير رؤى وأدوات تعتمد على
                    البيانات لدعم اتخاذ القرار وذكاء الأعمال.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-gray-600">
                    تعزيز تمكين المستخدم :
                  </span>
                  <br />
                  <p>
                    مواءمة استراتيجيات تكنولوجيا المعلومات مع الأهداف التنظيمية
                    لدفع النمو والقدرة التنافسية. توفير رؤى وأدوات تعتمد على
                    البيانات لدعم اتخاذ القرار وذكاء الأعمال.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-gray-600">
                    ضمان الاستدامة وقابلية التوسع :
                  </span>
                  <br />
                  <p>
                    مواءمة استراتيجيات تكنولوجيا المعلومات مع الأهداف التنظيمية
                    لدفع النمو والقدرة التنافسية. توفير رؤى وأدوات تعتمد على
                    البيانات لدعم اتخاذ القرار وذكاء الأعمال.
                  </p>
                </li>
              </ul>
            </p>
            <h4>
              <span className="font-bold text-black"> :القيم الأساسية</span>
            </h4>
            <p>
              <ul>
                <li>
                  النزاهة: التمسك بالصدق والشفافية والسلوك الأخلاقي في جميع
                  المساعي.
                </li>
                <li>
                  التميز: السعي لتحقيق أعلى المعايير في التعليم والبحث والخدمة.
                </li>
                <li>
                  الابتكار: تشجيع الإبداع وأساليب التفكير المستقبلي لمواجهة
                  تحديات الأعمال.
                </li>
                <li>
                  التعاون: بناء علاقات قوية مع أصحاب المصلحة لتحقيق النجاح
                  المتبادل.
                </li>
                <li>
                  الاستدامة: تعزيز الممارسات التي تضمن الرفاهية البيئية
                  والاجتماعية والاقتصادية على المدى الطويل.
                </li>
              </ul>
            </p>
          </div>
          <div
            class="w-full text-gray-500 sm:text-lg dark:text-gray-400 py-8"
            id="it"
          >
            <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900">
              قسم تقنية المعلومات
            </h2>
            <p class="mb-4 font-light">
              قسم تقنية المعلومات أحد الأقسام التي أنشئت بالكلية في العام م2019,
              ويهدف القسم لإكساب الطلبة الملتحقين الأسس والقواعد العلمية
              والبرمجية في كافة مجالات الحوسبة وتقنية المعلومات، معززة بالتدريب
              والخبرة العملية لعلوم الحاسوب، ويمنح القسم درجة البكالريوس
              والدبلوم في تقنية المعلومات.
            </p>
            <h4 className="text-black">
              <span className="font-bold text-black"> :الرسالة</span>
            </h4>
            <p>
              توفير تعليم إدارة الأعمال التحويلي الذي يرتكز على الدقة الأكاديمية
              والقيم الأخلاقية والأهمية العملية. من خلال التدريس المبتكر
              والأبحاث المتطورة والشراكات الصناعية القوية، نهدف إلى تطوير قادة
              ماهرين وقابلين للتكيف ومسؤولين اجتماعيًا يتفوقون في عالم ديناميكي
              ومترابط.
            </p>
            <h4>
              <span className="font-bold text-black"> :الرؤية</span>
            </h4>
            <p>
              {" "}
              أن نكون قسما رائدا معترف به عالميًا في مجال تعليم وأبحاث إدارة
              الأعمال، وتعزيز الابتكار والقيادة الأخلاقية والممارسات المستدامة
              التي تقود التغيير الإيجابي في عالم الأعمال والمجتمع.
            </p>
            <h4 className="text-black">
              <span className="font-bold"> :الأهداف</span>
            </h4>
            <p>
              <ul className="">
                <li>
                  <span className="font-semibold text-gray-600">
                    :تحقيق التميز الأكاديمي
                  </span>
                  <br />
                  <p>
                    تقديم منهج شامل ومتوافق مع الصناعة يدمج النظرية والتطبيق.
                    تعزيز مهارات التفكير النقدي والإبداع وحل المشكلات لدى
                    الطلاب.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-gray-600">
                    :تعزيز البحث والابتكار
                  </span>
                  <br />
                  <p>
                    تشجيع أعضاء هيئة التدريس والطلاب على المشاركة في الأبحاث
                    المؤثرة التي تعالج تحديات الأعمال في العالم الحقيقي.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-gray-600">
                    :زراعة القيادة الأخلاقية
                  </span>
                  <br />
                  <p>
                    غرس شعور قوي بالأخلاق والنزاهة والمسؤولية الاجتماعية لدى
                    الطلاب. إعداد الخريجين للقيادة بالتعاطف والشمولية والالتزام
                    بالاستدامة.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-gray-600">
                    :ضمان التحسين المستمر
                  </span>
                  <br />
                  <p>
                    تنفيذ ممارسات وحلول تكنولوجيا المعلومات المستدامة بيئياً.
                    تصميم أنظمة قابلة للتطوير يمكنها التكيف مع النمو المستقبلي
                    والتقدم التكنولوجي.
                  </p>
                </li>
              </ul>
            </p>
          </div>
          <div
            class="w-full text-gray-500 sm:text-lg dark:text-gray-400 py-8"
            id="economics"
          >
            <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900">
              قسم الاقتصاد
            </h2>

            <h4 className="text-black">
              <span className="font-bold text-black"> :الرسالة</span>
            </h4>
            <p>
              اعداد دارسين متميزين في الاقتصاد مزودين بالمهارات والخبرات التي
              تؤهلهم للمنافسة في سوق العمل في القطاعين العام والخاص بالمنطقة وما
              جاورها وإجراء بحوث علمية مبتكرة.
            </p>
            <h4>
              <span className="font-bold text-black"> :الرؤية</span>
            </h4>
            <p>
              {" "}
              السعي إلى الرقي بمستوى أفراد القسم من حيث رفع كفاءتهم باستخدام
              جميع الموارد المتوفرة شئ في بيئة أخلاقية وإبداعية.
            </p>
            <h4 className="text-black">
              <span className="font-bold"> :الأهداف</span>
            </h4>
            <p>
              <ul className="">
                <li>
                  <span className=" text-gray-600">
                    :تطوير وتنمية المناهج الاقتصادية.
                  </span>
                </li>
                <li>
                  <span className=" text-gray-600">
                    :استخدام الطرق الحديثة في التدريس التي تتعدى الأساليب
                    التقليدية لأقصى درجة ممكنة.
                  </span>
                  <br />
                </li>
                <li>
                  <span className=" text-gray-600">
                    بذل أقصى جهد ممكن لرفع مستوى التحصيل العلمي والمهارات
                    المكتسبة للطلاب من خلال البرنامج الدراسي.
                  </span>
                </li>
                <li>
                  <span className=" text-gray-600">
                    إجراء البحوث المتميزة وبخاصة التي تخدم الاحتياجات الاقتصادية
                    السريعة والمتغيرة في المنطقة، على مختلف المستويات ولجميع
                    القطاعات. وتوسيع الإنجازات العلمية لأعضاء هيئة التدريس ورفع
                    السمعة العلمية للقسم إلى المستوى المحلي والعالمي.
                  </span>
                </li>
                <li>
                  <span className=" text-gray-600">
                    الانخراط الفاعل في تقديم الخدمات الممكنة للمجتمع وتعريفه
                    ببعض المبادئ والمعرفة الاقتصادية من أجل تمكينه من التعرف إلى
                    المشكلات الاقتصادية التي يعاني منها وكيفية معالجتها.
                  </span>
                </li>
              </ul>
            </p>
          </div>
          <div
            class="w-full text-gray-500 sm:text-lg dark:text-gray-400 py-8"
            id="law"
          >
            <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900">
              قسم القانون
            </h2>
            <h4 className="text-black">
              <span className="font-bold text-black"> :الرسالة</span>
            </h4>
            <p>
              بناء جيل من الخريجين القادرين على قيادة حركة المجتمع السوداني
              ومحاولة تطويره بما يوائم مع المتغيرات الاكاديمية الدولية وبما يخدم
              مسيرة التنمية في المجتمع ومحاولة المساهمة في تطويره في كافة
              المجالات ذات الصلة بالقانون
            </p>
            <h4>
              <span className="font-bold text-black"> :الرؤية</span>
            </h4>
            <p>
              {" "}
              السعي الى تحقيق مستوى أكاديمي عال ومتطور في المناهج والاعداد
              الأكاديمي للطالب يمكن ان يرتقي الى مستوى الجامعات الحكومية
              والمؤسسات الاكاديمية العالمية المتطورة في ذات المجال وهو القانون,
              ودوره في قيادة حركة المجتمع حاليا ومستقبليا.
            </p>
            <h4 className="text-black">
              <span className="font-bold"> :الأهداف</span>
            </h4>
            <ul className="">
              <li>
                <span className=" text-gray-600">
                  السعي لتحقيق المستوى العلمي والأكاديمي العالي للطالب والخريج
                  وبما يؤهله للمنافسة مع المؤسسات الاكاديمية الحكومية والخاصة في
                  السودان والعالم.
                </span>
              </li>
              <li>
                <span className=" text-gray-600">
                  السعي المتواصل للتشاور مع المؤسسات العلمية والوزارة لتطوير
                  المناهج الدراسية المعتمدة بهدف رفع مستوى الاداء الأكاديمي.
                </span>
                <br />
              </li>
              <li>
                <span className=" text-gray-600">
                  الاستفادة من الخبرات الاكاديمية الموجودة في القسم لتعزيز قدرات
                  الطلاب الميدانية مستقبلا ويسهم في تسهيل اندماجهم في اسواق
                  العمل المتاحة.
                </span>
              </li>
              <li>
                <span className=" text-gray-600">
                  السعي المتواصل لتعزيز قدرات الطلاب والخريجين في مجال البحوث
                  الاكاديمية والميدانية لتطوير قدراتهم في مجال اختصاصهم وتيسير
                  فتح افاق المعرفة المتقدمة لديهم تسهيلا لدمجهم مستقبلا في سوق
                  العمل عند اختيارهم لمجال العمل الأكاديمي واكمال الدراسات
                  العليا لتلبية حاجات التعليم الأكاديمي
                </span>
              </li>
              <li>
                <span className=" text-gray-600">
                  التنسيق مع المؤسسات القضائية والعدلية والاستفادة من القضاة
                  بالمنطقة بقدر الامكان لزيادة قدرات الطلاب والخريجين بما يساهم
                  في اعدادهم اعدادا عمليا يسهم في تسهيل اندماجهم في سوق العمل
                  المتاح.
                </span>
              </li>
              <li>
                <span className=" text-gray-600">
                  التنسيق مع نقابة المحامين والقيام بنشاطات مشتركة بهدف التيسير
                  على الخريجين في تلبية متطلبات سوق العمل.
                </span>
              </li>
              <li>
                <span className=" text-gray-600">
                  حث الطلاب على الدخول الى مواقع الانترنت القانونية والقضائية
                  والتشريعية وتطوير امكانياتهم التقنية والقانونية بما يعزز
                  امكاناتهم ويسهل تلبية الفرص المتاحة في سوق العمل.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArabicDepartmentsPage;
