import Logo from "../../../public/assets/images/GCST.png";
import { Languages } from "lucide-react";
import { useEffect, useState } from "react";
import DropDownMenu from "./sub-components/DropDownMenu";

const Navbar = () => {
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.min(scrollY / 200, 1);
      setBgOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`flex w-full text-black text-[18px] md:text-3xl md:font-medium z-50 justify-start items-center px-4 py-2 sticky top-0 transition duration-500`}
      style={{
        backgroundColor: `rgba(54, 87, 60, ${bgOpacity})`,
      }}
    >
      <div
        className="flex items-center justify-between flex-row-reverse w-full md:w-fit"
        lang="ar"
      >
        {/*Mobile menu*/}
        <div className=" bg-transparent hover:bg-[#637C65] border-white text-white text-[14px] rounded-full px-3 py-3 right-0 block md:hidden font-cairo">
          <a id="navbar-language" href="/english" className=" ">
            <Languages className="h-4 w-4" />
          </a>
        </div>
        <div className="dropdown flex items-center">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              id="navbar-menu"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow top-14 text-white"
          >
            <li>
              <a
                href="/"
                className="text-[14px] font-roboto text-black  text-start"
              >
                الرئيسية
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-[14px] font-roboto text-black text-start"
              >
                عن الكلية
              </a>
            </li>
            <li>
              <a
                href="#students"
                className="text-[14px] font-roboto text-black text-start"
              >
                شئون الطلاب
              </a>
              <ul className="p-2">
                <li>
                  <a
                    href="#students"
                    className="text-[14px] font-roboto text-black text-start"
                  >
                    القبول والتسجيل
                  </a>
                </li>
                <li>
                  <a
                    href="#students"
                    className="text-[14px] font-roboto text-black text-start"
                  >
                    الارشاد الاكاديمي
                  </a>
                </li>
                <li>
                  <a
                    href="#students"
                    className="text-[14px] font-roboto text-black text-start"
                  >
                    اقسام الكلية
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#course-info"
                className="text-[14px] font-roboto text-black text-start"
              >
                توصيف المقررات
              </a>
            </li>
            <li>
              <a
                href="#centers"
                className="text-[14px] font-roboto text-black text-start"
              >
                المراكز
              </a>
              <ul className="p-2">
                <li>
                  <a
                    href="#center1"
                    className="text-[14px] font-roboto text-black text-start"
                  >
                    ام قصي للمرأة والطفل
                  </a>
                </li>
                <li>
                  <a
                    href="#centers"
                    className="text-[14px] font-roboto text-black text-start"
                  >
                    مركز المخزون المعرفي
                  </a>
                </li>
                <li>
                  <a
                    href="#centers"
                    className="text-[14px] font-roboto text-black text-start"
                  >
                    لأبحاث والمشاريع البحثية
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#contact"
                className="text-[14px] font-roboto text-black text-start"
              >
                الاخبار
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-[14px] font-roboto text-black text-start"
              >
                الاتصال بنا
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* desktop */}
      <div
        className="hidden md:flex items-center justify-between gap-4 w-full text-white font-thin"
        lang="ar"
      >
        <div className=" bg-[#36573c] hover:bg-[#637C65] border-white text-white rounded-full px-3 py-3 right-0 hidden md:block font-cairo">
          <a id="navbar-language" href="/english" className="bg-[#343300] ">
            <Languages className="h-4 w-4" />
          </a>
        </div>
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              href="#contact"
              className="text-[14px] md:text-lg font-cairo text-end"
            >
              الاتصال بنا
            </a>
          </li>
          <li>
            <a
              href="#news"
              className="text-[14px] md:text-lg font-roboto text-end"
            >
              الاخبار
            </a>
          </li>
          <DropDownMenu
            title="المراكز"
            item1="ام قصي للمرأة والطفل"
            item2="مركز المخزون المعرفي"
            item3="الأبحاث والمشاريع البحثية"
          />
          {/* <li>
            <details>
              <summary className="text-[14px] md:text-lg font-roboto text-end">
                توصيف المقررات
              </summary>
              <ul className="p-2 z-10 text-black min-w-[200px]">
                
                <li className="w-full flex justify-end">
                  <a
                    href="#centers"
                    className="text-[10px] md:text-xs font-roboto text-end w-full hover:bg-gray-100"
                  >
                    مركز ام قصي للمرأة والطفل
                  </a>
                </li>
                <li className="w-full flex justify-end">
                  <a
                    href="#centers"
                    className="text-[14px] md:text-xs font-roboto text-end w-full hover:bg-gray-100"
                  >
                    مركز المخزون المعرفي
                  </a>
                </li>
                <li className="w-full flex justify-end">
                  <a
                    href="#centers"
                    className="text-[14px] md:text-xs font-cairo text-end w-full hover:bg-gray-100"
                  >
                    الأبحاث والمشاريع البحثية
                  </a>
                </li>
              </ul>
            </details>
          </li> */}
          <li>
            <details>
              <summary className="text-[14px] md:text-lg font-roboto text-end">
                شئون الطلاب
              </summary>
              <ul className="p-2 z-10 text-black min-w-[200px]">
                <li className="w-full flex justify-end">
                  <a
                    href="#centers"
                    className="text-[10px] md:text-xs font-roboto text-end w-full hover:bg-gray-100"
                  >
                    القبول والتسجيل
                  </a>
                </li>
                <li className="w-full flex justify-end">
                  <a
                    href="#centers"
                    className="text-[14px] md:text-xs font-roboto text-end w-full hover:bg-gray-100"
                  >
                    الارشاد الاكاديمي
                  </a>
                </li>
                <li className="w-full flex justify-end">
                  <a
                    href="#centers"
                    className="text-[14px] md:text-xs font-cairo text-end w-full hover:bg-gray-100"
                  >
                    اقسام الكلية
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a
              href="#about"
              className="text-[14px] md:text-lg font-roboto text-end font-cairo"
            >
              عن الكلية
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-[14px] md:text-lg font-roboto  text-end"
            >
              الرئيسية
            </a>
          </li>
        </ul>
      </div>

      <a href="/">
        <img
          src={Logo}
          alt="university logo"
          width={60}
          height={60}
          className="mt-1"
        />
      </a>
    </div>
  );
};

export default Navbar;
