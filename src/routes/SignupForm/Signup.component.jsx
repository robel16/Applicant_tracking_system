import React from "react";
import { Form } from "react-router-dom";
import FormInput from "../../components/Form/form";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import Button from "../../components/Button/button.component";
import bg from "../../assets/svg1.svg";
import bg1 from "../../assets/svg2.svg";
import { useEffect } from "react";
import axios from "axios";

import { useUserTokenStore } from "../../store/store";
const Signup = () => {
  const defaultFormFields = {
    fullname: "",
    username: "",
    password: "",
    email: "",
  };

  const [signupFormFields, setFormFields] = useState(defaultFormFields);
  const { fullname, username, email, password } = signupFormFields;

  const onChangeHandler = (event) => {
    console.log("fired");
    const { name, value } = event.target;
    setFormFields({ ...signupFormFields, [name]: value });
  };

  //handles the login form
  //   const Handleclick = async (event) => {
  //     event.preventDefault();

  //     let result = await axios.post("https://rekebot2.mmcytech.com/auth/login", {
  //       email: "dawit.a@mmcytech.com",
  //       password: "password",
  //     });

  //     setUserToken(result.data.token);
  //     console.log(result);
  //   };

  return (
    <div className="flex absolutes justify-center">
      <div className="login-containers relative font-serif h-99 w-full">
        <div className="login-headers mt-7 mr-0 mb-0 ml-12  ">
          <span className="mmcys text-black font-serif text-2xl">MMCY|</span>
          <span className="techs text-cust-secondary text-2xl sm:flex-col ">
            Tech{" "}
          </span>
          <span className="mmcys text-black font-serif text-2xl m-6">
            {" "}
            sign up as applicant
          </span>
        </div>

        <div className="input-containers absolute mt-10 ml-8 mb-0 mr-24 z-10 w-52  ">
          <form className="relative   ">
            <FormInput
              label="fullname"
              value={fullname}
              name="fullname"
              onChange={onChangeHandler}
              icon={<AiOutlineUser />}
              required
            />
            <FormInput
              label="username"
              value={username}
              name="username"
              onChange={onChangeHandler}
              icon={<AiOutlineUser />}
              required
            />
            <FormInput
              label="Email"
              value={email}
              name="email"
              onChange={onChangeHandler}
              icon={<AiOutlineUser />}
              required
            />
            <FormInput
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={onChangeHandler}
              icon={<CiLock />}
              required
            />

            <Button className="btn-mgs  ">sign up</Button>
          </form>
        </div>
        <img src={bg1} alt="test" className="bg-svgs absolute bottom-0 w-100" />
        <img src={bg} alt="test" className="bg-svgs absolute bottom-0 w-100" />
      </div>
    </div>
  );
};

export default Signup;
