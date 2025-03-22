import React from "react";
import { useAuth } from "../../context/AuthContext"; // Adjust path
import { useNavigate } from "react-router-dom";
import logo from "../../../public/assets/images/GCST.png";
import md5 from "md5";

const AdminNav = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/admin/login");
    } catch (error) {
      console.error("Logout failed:", error.message);
      alert("Failed to log out. Please try again.");
    }
  };

  const gravatarUrl = user
    ? `https://www.gravatar.com/avatar/${md5(
        user.email.trim().toLowerCase()
      )}?s=40&d=identicon`
    : "https://www.gravatar.com/avatar/00000000000000000000000000000000?s=40&d=mp"; // Default mystery person

  return (
    <div className="sticky top-0 z-50 px-5 bg-[#36573c]" lang="ar">
      <div className="navbar">
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-start">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {/* Display profile photo from Gravatar */}
                <img src={gravatarUrl} alt="User Avatar" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[10] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
          <div className="ml-10">
            <ul className="flex gap-6 justify-center items-center text-white font-cairo">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/admin">Posts</a>
              </li>
              <li>
                <a href="/admin/staff">Staff </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 navbar-end">
          <img src={logo} alt="GCST Logo" width={40} height={40} />
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
