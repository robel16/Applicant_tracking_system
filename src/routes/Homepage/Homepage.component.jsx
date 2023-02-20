import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/button.component";
import LoginForm from "../LoginForm/login.route";
import Signup from "../SignupForm/Signup.component";
import Applicantslogin from"../Applicantslogin/Applicant.login"
import Image from "../../img/illustration-intro.svg";
import avatar1 from "../../img/avatar-ali.png";
import avatar2 from "../../img/avatar-anisha.png";
import avatar3 from "../../img/avatar-richard.png";
import avatar4 from "../../img/avatar-shanai.png";
import logo1 from "../../img/icon-facebook.svg";
import logo2 from "../../img/icon-instagram.svg";
import logo3 from "../../img/icon-twitter.svg";

const Homepage = () => {

  const recruitorclick=()=>{

  }
  const applicantclick=()=>{

  }
  const navigate = useNavigate();
  let img =
    "https://www.mmcytech.com/wp-content/uploads/2022/01/MMCY-Tech_New-white_1.png";
  return (
    <>
      <div className="bg-cust-primary relative   p-6 ">
        <div className="flex items-center justify-between">
          <div className="pt-2 ">
            <img className=" h-[60px]" src={img} alt="" />
          </div>
          <div className=" md:flex space-x-6">
            {/* menu items */}

            <Button className="btn-mgs  " onClick={() => navigate("login")}>
              log in as a recruitor
            </Button>
            <Button onClick={() => navigate("Applicant%-login12")}> login as applicant</Button>
            
          </div>
        </div>
      </div>
      <section id="hero">
        <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
          <div className="flexflex-cl mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              bring everyone together to build better products
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view
            </p> 
        
          </div>
   <div>
   </div>
          <div>
            <img className="" src={Image} alt="" />
          </div>
        </div>
      </section>

      {/* feature section */}
      <section id="feature">
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row ">
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              What's different about manage
            </h2>
            <p className="max-w-sm text-center text-darkGrayishBlue md:mext-left">
              manage provide all the functionality your team needs without the
              complexity.our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          {/* <!--numbered list--> */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightREdSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    track company wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  track company wide progress
                </h3>
                <p className="text-darkGrayishBlue">
                  see how your day-to-day tasks fit into the ider vision.go from
                  tracking progress at the milestone level all the way done to
                  the smallest of details.never lose sight of the bigger picture
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-8 md:w-1/2">
              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                <div className="rounded-l-full bg-brightREdSupLight md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                      01
                    </div>
                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                      advance build-in report
                    </h3>
                  </div>
                </div>
                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    advance build-in report
                  </h3>
                  <p className="text-darkGrayishBlue">
                    set internal delivery estimate and track progress toward
                    company goals.our customisable dashboard helps you build out
                    the reports you need to keep key stakeholders informed.
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                <div className="rounded-l-full bg-brightREdSupLight md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                      03
                    </div>
                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                      everything you need in one place
                    </h3>
                  </div>
                </div>
                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    everything you need in one place
                  </h3>
                  <p className="text-darkGrayishBlue">
                    stop jumping from one service to another to
                    communicate,softwarefiles,track task and share
                    documents.manage offers and all-in-one team productivity
                    solution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--testimonials--> */}

      <section id="testimonial">
        {/* <!--container to heading testimonil blocks--> */}
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          <h2 className="text-4xl font-bold text-center">
            what's different about manage?
          </h2>
          <div className="  flex flex-col mt-24 md:flex-row md:space-x-6 ">
            {/* <!--test1--> */}
            <div className="transform transition-all hover:scale-90 flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-300 md:w-1/3">
              <img className="w-16 -mt-14" src={avatar3} alt="" />
              <h5 className="text-lg font-bold"> Anisha</h5>
              <p className="text-sm text-darkGrayishBlue">
                "manage has supercharged our team's workflow.the ability to
                maintain visibility on larger milestone at all times keeps
                everyone motivated"
              </p>
            </div>

            <div className=" transform transition-all hover:scale-90 hidden  flex-col items-center p-6 space-y-6 rounded-lg bg-gray-300 md:flex md:w-1/3">
              <img className="w-16 -mt-14" src={avatar2} alt="" />
              <h5 className="text-lg font-bold"> Ali</h5>
              <p className="text-sm text-darkGrayishBlue">
                "manage has supercharged our team's workflow.the ability to
                maintain visibility on larger milestone at all times keeps
                everyone motivated"
              </p>
            </div>

            <div className="transform transition-all hover:scale-90 hidden  flex-col items-center p-6 space-y-6 rounded-lg bg-gray-300 md:flex md:w-1/3">
              <img className="w-16 -mt-14" src={avatar1} alt="" />
              <h5 className="text-lg font-bold"> Richerd</h5>
              <p className="text-sm text-darkGrayishBlue">
                "manage has supercharged our team's workflow.the ability to
                maintain visibility on larger milestone at all times keeps
                everyone motivated"
              </p>
            </div>

            <div className="transform transition-all hover:scale-90 hidden  flex-col items-center p-6 space-y-6 rounded-lg bg-gray-300 md:flex md:w-1/3">
              <img className="w-16 -mt-14" src={avatar4} alt="" />
              <h5 className="text-lg font-bold"> Shanai</h5>
              <p className="text-sm text-darkGrayishBlue">
                "manage has supercharged our team's workflow.the ability to
                maintain visibility on larger milestone at all times keeps
                everyone motivated"
              </p>
            </div>
          </div>
          <div className="my-16">
            {/* <a
              href=""
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-darkBlue"
            >
              Get started
            </a> */}
          </div>
        </div>
      </section>

      <section id="cta" className="bg-brightRed">
        <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
          <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Simplify how your team works today
          </h2>
          <div>
            <a
              href="sign-up"
              className="p-3 px-6 pt-2  text-brightRed  bg-white rounded-full baseline hover:bg-darkBlue shadow-2xl transition-color duration-200 "
            >
              Get started
            </a>
             
          </div>
        </div>
      </section>
      <footer className="bg-veryDarkBlue">
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          <div className="flex justify-center space-x-4">
            <a href="#">
              <img
                class="h-8 transform transition-all hover:scale-125"
                src={logo1}
                alt=""
              />
              <img
                class="h-8 transform transition-all hover:scale-125"
                src={logo2}
                alt=""
              />
              <img
                class="h-8 transform transition-all hover:scale-125"
                src={logo3}
                alt=""
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Homepage;
