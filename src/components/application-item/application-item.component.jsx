import { CgSoftwareDownload } from "react-icons/cg";
// import "./application-item.component.scss";
import { capitalize } from "../../utils";

const ApplicationItem = ({ applicant }) => {
  const { name, job } = applicant;
  return (
    <div className=" flex flex-row w-128 border-black border  ring-0 rounded-lg justify-between md:w1/2">
      <div className=" p-6 text-xl  font-sans ">
        {capitalize(name)} | {capitalize(job)}
      </div>
      <CgSoftwareDownload className=" order-3 m-9   scale-125  hover:z-50 transform transition-all hover:scale-150     rounded-full cursor-pointer   " />
    </div>
  );
};
export default ApplicationItem;
