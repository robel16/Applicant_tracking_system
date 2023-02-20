import React from "react";
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
  
   const [fullname, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  // const onChangeHandler = (event) => {
  //   console.log("fired");
  //   const { name, value } = event.target;
  //   setFormFields({ ...signupFormFields, [name]: value });
    
  // };
 
const handleSubmit = async (e) => {
 e.preventDefault();
     const formData = {email,  fullname,password, username,  };
    // try {
    //   const response = await axios.post('http://localhost:4000/api/applicant', {fields:formData});
    //   console.log(response.data); // or do something else with the response
    // } catch (error) {
    //   console.error(error);
    // }
    await  axios
      .post("http://localhost:4000/api/applicant", {applicant: formData})
      .then((response) => {
        console.log(response.data);
       
      })
      .catch((error) => {
        console.error(error);

      });
    // console.log(formData)
};


  

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
          <form className="relative   " onSubmit={handleSubmit}>
            <FormInput
              label="fullname"
              value={fullname}
              name="fullname"
              onChange={(e)=>setFullName(e.target.value)}
              icon={<AiOutlineUser />}
              required
            />
            <FormInput
              label="username"
              value={username}
              name="username"
              onChange={(e)=>setUsername(e.target.value)}
              icon={<AiOutlineUser />}
              required
            />
            <FormInput
              label="Email"
              value={email}
              name="email"
              onChange={(e)=>setEmail(e.target.value)}
              icon={<AiOutlineUser />}
              required
            />
            <FormInput
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
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
