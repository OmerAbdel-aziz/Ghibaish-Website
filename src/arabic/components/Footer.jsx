import React from "react";
import logo from "../../../public/assets/images/GCST.png";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer
      className={`footer bg-[#1E1E1E] text-white p-10 relative ${
        isHomePage ? "top-0" : "top-[35vh]"
      } text-end`}
      lang="ar"
    >
      <nav className="place-self-end">
        <h6 className="footer-title text-start place-self-end">مراكز الكلية</h6>
        <a className="link link-hover text-end  place-self-end">
          مركز أم قصي للمرأة و الطفل
        </a>
        <a className="link link-hover text-end place-self-end">
          مركز المخزون المعرفي
        </a>
        <a className="link link-hover text-end place-self-end">
          المكتبة و المعامل
        </a>
      </nav>
      <nav className="place-self-end">
        <h6 className="footer-title  text-end place-self-end">شؤون الطلاب</h6>
        <a className="link link-hover text-end place-self-end">
          القبول و التسجيل
        </a>
        <a className="link link-hover text-end place-self-end">أقسام الكلية</a>
        <a className="link link-hover text-end place-self-end">
          الارشاد الأكاديمي
        </a>
      </nav>
      <nav className="place-self-end">
        <h6 className="footer-title text-end place-self-end ">
          تابعنا على الوسائط
        </h6>
        <a className="link link-hover text-end place-self-end">فيسبوك</a>
        <a className="link link-hover text-end place-self-end"> لنكدن</a>
        <a className="link link-hover text-end place-self-end">قناة تليغرام</a>
      </nav>
      <nav className="place-self-end">
        <h6 className="footer-title text-end place-self-end ">الرئيسية</h6>
        <a className="link link-hover text-end place-self-end">عن الكلية</a>
        <a className="link link-hover text-end place-self-end">الاتصال ينا</a>
        <a className="link link-hover text-end place-self-end">الاخبار</a>
      </nav>

      <aside className="place-self-end">
        <div className="flex flex-col md:flex-row gap-10 items-center justify-end">
          <p>
            كلية غبيش للعلوم و التكنولوجيا
            <br />
            رواد في مجال التعليم العالي منذ عام 2017
            <br />
          </p>
          <img src={logo} alt="" className="w-20 h-20 " />
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
