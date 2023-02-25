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

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  // const onChangeHandler = (event) => {
  //   console.log("fired");
  //   const { name, value } = event.target;
  //   setFormFields({ ...loginFormFields, [name]: value });
  // };
  // a;

  //handles the login form
  // const Handleclick = async (event) => {
  //   event.preventDefault();

  //   await axios
  //     .post("http://localhost:4000/api/auth/login", {
  //       recruiter: loginFormFields,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       setUserToken(response.data.token);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        {
          username,
          password,
        }
      );
      const token = response.data.token;
      // Store the token in your state management system
      setUserToken(token);
      setError("");
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
      window.location.href = "/";
    } catch (error) {
      console.error(error);
      setError("Invalid username or password");
    }
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
            onChange={(e) => setUsername(e.target.value)}
            icon={<AiOutlineUser />}
            required
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<CiLock />}
            required
          />
          <Button className="btn-mgs  " onClick={handleLogin}>
            Login
          </Button>
          {error && <p className="text-red-500">{error}</p>}
          {success && (
            <p className="text-green-500 border border-green-500 rounded px-3 py-2">
              Login successful!
            </p>
          )}
        </form>
      </div>
      <img src={bg1} alt="test" className="bg-svgs absolute bottom-0 w-100" />
      <img src={bg} alt="test" className="bg-svgs absolute bottom-0 w-100" />
    </div>
  );
};
export default LoginForm;
