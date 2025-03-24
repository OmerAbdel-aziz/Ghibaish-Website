import logo from "../../../public/assets/images/GCST.png";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/english";
  return (
    <>
      <footer
        className={`footer bg-[#1E1E1E] text-white p-10 relative ${
          isHomePage ? "top-[555px]" : "top-[35vh]"
        } text-end`}
      >
        <aside>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <img src={logo} alt="" className="w-20 h-20 " />
            <p>
              Ghibaish College of Science & Technology
              <br />
              Providing High education since 2017
              <br />
              <span>
                <a href="admin/login">Admin</a>{" "}
              </span>
            </p>
            <p></p>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Home</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">News</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Mediea</h6>
          <a
            className="link link-hover"
            href="https://www.facebook.com/GCSTSD/"
          >
            Faceook
          </a>
          <a
            className="link link-hover"
            href="https://www.linkedin.com/school/ghibaish-college-of-science-and-technology/"
          >
            LinkedIn
          </a>
          <a className="link link-hover" href="https://t.me/GCST1992">
            Telegram Channel
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Student's Affairs</h6>
          <a className="link link-hover">Admission</a>
          <a className="link link-hover">Departments</a>
          <a className="link link-hover">Academics</a>
        </nav>
        <nav>
          <h6 className="footer-title">Research Centers & Institutes</h6>
          <a className="link link-hover">Um Qusai Center</a>
          <a className="link link-hover">Indegnous Knowldege Center</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
