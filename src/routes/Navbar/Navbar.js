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
      <div
        className={`fixed top-0 p-
      [20px] w-
      [100%] h-
      [30px] z-1 transition ease-in duration-0.5 ${show && "bg-black"}`}
      >
        <div className="nav__contents">
          <img
            className="Logo"
            onClick={() => navigate("/")}
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
          />
          <img
            className="avatar"
            onClick={() => navigate("/Profile")}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
