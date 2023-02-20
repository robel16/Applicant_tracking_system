import FormInput from "../../components/Form/form";
import { useState } from "react";
import "./login.style.scss";
import { AiOutlineUser } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import Button from "../../components/Button/button.component";
import bg from "../../assets/svg1.svg";
import bg1 from "../../assets/svg2.svg";
import { useEffect } from "react";
import axios from "axios";

import { useUserTokenStore } from "../../store/store";

const defaultFormFields = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const setUserToken = useUserTokenStore((state) => state.setUsertoken);

  const token = useUserTokenStore((state) => state.Usertoken);

  const [loginFormFields, setFormFields] = useState(defaultFormFields);
  const { username, password } = loginFormFields;

  const onChangeHandler = (event) => {
    console.log("fired");
    const { name, value } = event.target;
    setFormFields({ ...loginFormFields, [name]: value });
  };

  //handles the login form
  const Handleclick = async (event) => {
    event.preventDefault();

    // let result = await axios.post("https://rekebot2.mmcytech.com/auth/login", {
    //   email: "dawit.a@mmcytech.com",
    //   password: "password",
    // });

    // setUserToken(result.data.token);
    // console.log(result);
     await  axios
      .post("http://localhost:4000/api/auth/login", {applicant: loginFormFields})
      .then((response) => {
        console.log(response.data);
       
      })
      .catch((error) => {
        console.error(error);

      });
  };

  return (
    <div className="login-containers relative font-serif h-99">
      <div className="login-headers mt-7 mr-0 mb-0 ml-12  ">
        <span className="mmcys text-black font-serif text-2xl">MMCY|</span>
        <span className="techs text-cust-secondary text-2xl sm:flex-col ">
          Tech{" "}
        </span>
        <span className="mmcys text-black font-serif text-2xl">
          {" "}
          Recruitment
        </span>
      </div>

      <div className="input-containers relative mt-10 ml-8 mb-0 mr-24 z-10 w-52 ">
        <form>
          <FormInput
            label="Username"
            value={username}
            name="username"
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
          <p>Forget Password?</p>
          <Button className="btn-mgs  " onClick={Handleclick}>
            Login
          </Button>
        </form>
      </div>
      <img src={bg1} alt="test" className="bg-svgs absolute bottom-0 w-100" />
      <img src={bg} alt="test" className="bg-svgs absolute bottom-0 w-100" />
    </div>
  );
};
export default LoginForm;
