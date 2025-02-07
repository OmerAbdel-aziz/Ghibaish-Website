import DropdownMenu from "@/arabic/components/sub-components/DropDownMenu";
import Logo from "../../../public/assets/images/GCST.png";
import { Languages } from "lucide-react";
import { useEffect, useState } from "react";

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
      className={`flex w-full bg-[#1E1E1E] text-black text-[18px] md:text-3xl md:font-medium z-50 justify-start items-center px-4 py-2 sticky top-0 transition duration-500`}
      style={{
        backgroundColor: `rgba(54,87,60, ${bgOpacity})`,
      }}
    >
      <div className="flex items-center justify-between flex-row-reverse w-full md:w-fit">
        {/*Mobile menu*/}
        <div className=" bg-transparent hover:bg-[#637C65] border-white text-white text-[14px] rounded-full px-3 py-3 right-0 block md:hidden ">
          <a id="navbar-language" href="/" className=" ">
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
              <a href="/english" className="text-[14px] font-roboto text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-[14px] font-roboto text-black">
                About
              </a>
            </li>
            <li>
              <a
                href="#students"
                className="text-[14px] font-roboto text-black"
              >
                Students
              </a>
              <ul className="p-2">
                <li>
                  <a
                    href="#students"
                    className="text-[14px] font-roboto text-black"
                  >
                    Admission
                  </a>
                </li>
                <li>
                  <a
                    href="#students"
                    className="text-[14px] font-roboto text-black"
                  >
                    Academic Guidance
                  </a>
                </li>
                <li>
                  <a
                    href="#students"
                    className="text-[14px] font-roboto text-black"
                  >
                    Departments
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#course-info"
                className="text-[14px] font-roboto text-black"
              >
                Course Info
              </a>
              <ul className="p-2">
                <li>
                  <a
                    href="#course-admission"
                    className="text-[14px] font-roboto text-black"
                  >
                    Admission
                  </a>
                </li>
                <li>
                  <a
                    href="#course-guidance"
                    className="text-[14px] font-roboto text-black"
                  >
                    Academic Guidance
                  </a>
                </li>
                <li>
                  <a
                    href="#course-departments"
                    className="text-[14px] font-roboto text-black"
                  >
                    Departments
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#centers" className="text-[14px] font-roboto text-black">
                Centers
              </a>
              <ul className="p-2">
                <li>
                  <a
                    href="#center1"
                    className="text-[14px] font-roboto text-black"
                  >
                    Um Qusai center
                  </a>
                </li>
                <li>
                  <a
                    href="#centers"
                    className="text-[14px] font-roboto text-black"
                  >
                    Indegnous Knowledge center
                  </a>
                </li>
                <li>
                  <a
                    href="#centers"
                    className="text-[14px] font-roboto text-black"
                  >
                    Research
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#contact" className="text-[14px] font-roboto text-black">
                Contact us
              </a>
            </li>
          </ul>

          <img
            src={Logo}
            alt="university logo"
            width={50}
            height={50}
            className="mt-1 rounded-full block md:hidden w-12 h-12"
          />
        </div>
      </div>

      {/* desktop */}
      <div className="hidden md:flex items-center gap-4 w-full text-white font-thin">
        <a href="/english">
          <img
            src={Logo}
            alt="university logo"
            width={60}
            height={60}
            className="mt-1"
          />
        </a>
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/english" className="text-[14px] md:text-lg font-roboto">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-[14px] md:text-lg font-roboto">
              About
            </a>
          </li>
          <DropdownMenu
            title="Students"
            item1="Admission"
            item2="Academic Guidance"
            item3="Departments"
          />
          <DropdownMenu
            title="Centers"
            item1="Knowledge Repository Center"
            item2="Um Gusai Center"
            item3="Research and Projects"
          />

          <li>
            <a href="#news" className="text-[14px] md:text-lg font-roboto">
              News
            </a>
          </li>
          <li>
            <a href="#contact" className="text-[14px] md:text-lg font-roboto">
              Contact us
            </a>
          </li>
        </ul>
      </div>
      <div className=" bg-[#36573c] hover:bg-[#637C65] border-white text-white text-[14px] rounded-full px-3 py-3 right-0 hidden md:block">
        <a id="navbar-language" href="/" className="bg-[#343300] ">
          <Languages className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
