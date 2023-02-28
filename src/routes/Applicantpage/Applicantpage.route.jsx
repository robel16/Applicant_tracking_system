import React from "react";

import { useLocation } from "react-router-dom";
import img from "../../img/avatar-anisha.png";

import Applicantjoblist from "../ApplicantJoblist/ApplicantJoblsit.route";
const Applicants = () => {
  const logOut = () => {
    localStorage.removeItem("userToken");
    window.location.href = "/";
  };
  const { pathname } = useLocation();
  return (
    <>
      <div className=" flex  flex-row  w-100 h-100 scrollbar-hide   ">
        {/* nav container */}
        <div className="bg-cust-primary  w-1/6 h-full  flex flex-col ">
          {/* nav-header */}
          <div className="flex  justify-center  py-6 border-b  border-b-gray-700  p-3  ">
            {/* mmcy-nav */}
            <span className="text-white font-semibold xl:text-3xl md:text-2xl ">
              MMCY|
            </span>
            {/* tech-nav */}
            <span className="text-cust-secondary font-semibold xl:text-3xl md:text-2xl  ">
              Tech{" "}
            </span>
          </div>

          {/* nav-link-container */}
          <div className="h-auto  flex sm:flex-col justify-between absolute pt-3 items-center">
            <div className="flex relative items-center xl:p-2 xl:m-3 xl:left-14 xl:mt-[75%] xl:h-28 xl:w-28 md:w-1/2 md:h-1/2 sm:w-1/2 sm:h-1/2 sm:ml-4 sm:mt-[75%]  sm:-left-5 ">
              <img src={img} alt="" />
              <div className=" flex  items-center justify-center  xl:p-2 mt-4 ">
                <h1 className="flex  mr-[100px] absolute  mt-[130px]    text-white italic font-semibold ">
                  applicant name
                </h1>
              </div>
            </div>
          </div>

          <div className="flex  xl:h-[30%] sm:h-10 xl:w-48  xl:ml-4 absolute xl:bottom-[40%] sm:bottom-[50%] items-center  ">
            <h1 className="text-white   font-semibold xl:ml-10 text-xl">
              {" "}
              applied jobs
            </h1>
          </div>

          <div className="flex flex-col  absolute  w-75 h- left-[20%] top-10 ">
            <h1 className="text-semibold font-semibold text-2xl relative items-center justify-center left-[10%] p-3 mb-2">
              Job Lists
            </h1>
            <Applicantjoblist />
          </div>

          <div className="absolute bottom-10">
            <h1
              className="text-white   font-semibold ml-10 text-xl cursor-pointer hover:text-cust-secondary"
              onClick={logOut}
            >
              log out
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Applicants;
