import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [show, handleshow] = useState(false);
  let navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleshow(true);
    } else {
      handleshow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <>
      <div className={`nav ${show && "bg-[#192930]"}`}>
        <div className="nav__contents">
          <img
            className="Logo"
            onClick={() => navigate("/")}
            src="https://www.mmcytech.com/wp-content/uploads/2022/01/MMCY-Tech_New-white_1.png"
            alt=""
          />
          <div className=" md:flex space-x-6 fixed right-4">
            {/* menu items */}
            <a
              href="recruitor-login"
              className="p-3 px-6 pt-2  text-brightRed  bg-white rounded-full baseline hover:bg-darkBlue shadow-2xl transition-color duration-200 "
            >
              Recruitor log in
            </a>
            <a
              href="Applicant-login"
              className="p-3 px-6 pt-2  text-brightRed  bg-white rounded-full baseline hover:bg-darkBlue shadow-2xl transition-color duration-200 "
            >
              Applicant log in
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
