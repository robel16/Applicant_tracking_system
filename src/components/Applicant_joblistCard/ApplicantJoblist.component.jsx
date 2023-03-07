import React from "react";
import { useState } from "react";
import { AiFillDownCircle } from "react-icons/ai";
import Button from "../Button/button.component";
import { IoIosArrowDropupCircle } from "react-icons/io";
import axios from "axios";
const JoblistCard = (props) => {
  // console.log(props.Joblist)
  const Displayjobs = (props) => {
    const Handleclick = () => {
      setIsCollapsed(!isCollapsed);
      setTimeout(() => {
        setText(truncate(`${job.instructions} `, isCollapsed ? 400 : 40));
      });
    };

    const job = props.job;
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [opened, setIsOpend] = useState(false);
    const Handlapply = () => {
      setIsOpend(!opened);
    };
    const [file, setFile] = useState(null);
    const [success, setSuccess] = useState(false);
    //handles the submit
    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };

    const handleFileUpload = async () => {
      const formData = new FormData();
      formData.append("file", file, file.name);

      try {
        await axios.post(
          "http://localhost:4000/api/applicant/upload",
          formData
        );
        alert("File uploaded successfully!");
      } catch (error) {
        console.error(error);
        alert("File upload failed.");
      }
    };

    const truncate = (string, n) => {
      return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    };
    const [text, setText] = useState(truncate(`${job.instructions} `, 40));
    const classname = " md:text-xl font-normal sm:text-sm ";

    let steps = job.steps.map((step) => (
      <>
        {!isCollapsed && (
          <div
            className={
              isCollapsed
                ? `flex  items-center transition ease-out duration-300 space-x-2  flex-row`
                : "flex relative items-center   md:flex-row  sm:flex-col   "
            }
          >
            <div className="flex relative md:top-2 md:p-2 justify-center items-center   flex-row">
              <span className=" text-xl font-semibold md:w-10  sm:w-10 sm:text-sm    ">
                {" "}
                {step.type}
              </span>
            </div>
            <div className="flex relative md:top-1 md:p-2 justify-center items-center  ml-6 mt-2 ">
              <span className=" ">{step.prompt}</span>
            </div>
          </div>
        )}
      </>
    ));
    return (
      <>
        <div
          className={
            isCollapsed
              ? `flex  flex-row relative xl:w-70 xl:h-[200px] sm:w-70   sm:h-[400px] bg-[#BEB9B9] ml-24 top-[25%] border-2 shadow-xl mx-2 mb-16    rounded-3xl overflow-hidden `
              : `  flex flex-row relative xl:w-70 xl:h-[500px] sm:w-70 sm:h-[800px] bg-[#BEB9B9]  top-[25%] ml-24 border-2 shadow-xl mx-16 mb-16    rounded-3xl overflow-hidden `
          }
          key={job._id}
        >
          <div className=" h-10 w-10 relative -right-[85%] top-3 text-5xl">
            {isCollapsed ? (
              <AiFillDownCircle
                className=" hover:scale-125 cursor-pointer  "
                onClick={Handleclick}
              />
            ) : (
              <IoIosArrowDropupCircle
                className="hover:scale-125 cursor-pointer"
                onClick={Handleclick}
              />
            )}
            {!isCollapsed && (
              <>
                <div className="bottom-[20%] ">
                  <Button onClick={Handlapply}> Apply </Button>
                </div>
                <div className="flex">
                  {!opened && (
                    <label className="relative right-44   text-sm mr-4">
                      Choose a file:
                      <input
                        type="file"
                        className="border  border-black bg-cust-secondary text-cust-primary  rounded-sm"
                        onChange={handleFileChange}
                      />
                    </label>
                  )}
                </div>

                {!opened && (
                  <div>
                    <Button onClick={handleFileUpload}>Submit</Button>
                    {success && (
                      <p className="flex flex-col text-sm relative">
                        {" "}
                        applied successfull {file.name}
                      </p>
                    )}
                  </div>
                )}
              </>
            )}
          </div>

          <span className="text-3xl ml-4 top-[11%] relative font-semibold">
            Title:{" "}
          </span>
          <span className=" top-[11%] relative  p-1 sm:p-1  text-xl  ">
            {job.title}
          </span>
          <div
            className={
              isCollapsed
                ? ` relative sm:flex sm:flex-row md:-right-[38%] top-20 md:text-xl font-semibold sm:-left-[0%] sm:ml-60`
                : ` relative md:-left-[25%] sm:-left-[45%] sm:h-9 top-64 flex  text-xl font-semibold  sm:top-[60%] sm:flex sm:flex-col`
            }
          >
            <h2 className="sm:left-3 ">stages {job.steps.length}</h2>
          </div>
          <div
            className={
              isCollapsed
                ? ` absolute top-[35%] ml-24 text-md transition delay-500   `
                : `absolute top-[35%] ml-24 text-md `
            }
          >
            <h1 className="font-semibold text-2xl sm:mt-4 ">
              Job instructions
            </h1>

            <span className={`${classname} `}>{text}</span>
          </div>
          <div className=" relative top-[55%] right-[20%]    sm:w-auto sm:h-auto  ">
            {steps}
          </div>
        </div>
      </>
    );

    // })
    // return jobslists

    //  }
  };
  return <>{Displayjobs(props)}</>;
};

export default JoblistCard;
