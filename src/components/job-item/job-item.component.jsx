import EditorIcons from "../editor-icons/editor-icons.component";
// import "./job-item.style.scss";
import { Link } from "react-router-dom";
import { FcApprove } from "react-icons/fc";
const JobItem = ({ step }) => {
  const { title, steps, status } = step;

  let statusColor;
  let statusActive;
  let statusdisapproved;
  let statusapproved;

  function capitalizeWord(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  }

  switch (status) {
    case "active":
      statusColor = "text-green-500";
      statusActive = statusColor;

      break;
    case "approved":
      statusColor = "text-blue-700";
      statusapproved = statusColor;
      break;
    case "disapproved":
      statusColor = "text-red-500";
      statusdisapproved = statusColor;
      break;
    default:
      statusColor = "text-slate-900";

      break;
  }
  return (
    <div className="flex items-center xl:w-90 md:w-75   ">
      <Link
        Link
        to={`${title}`}
        state={{ step }}
        className={`xl:flex xl:justify-between xl:w-2/3 sm:w-1/2 md:w-1/2 border rounded-md border-cust-primary   transition duration-150 ease-out hover:ease-in p-2 
        
         ${
           statusColor === statusActive
             ? " border-green-500  "
             : statusColor === statusdisapproved
             ? "border-red-500 hover:bg-red-300  "
             : statusColor === statusapproved
             ? "border-blue-700 "
             : statusColor
             ? "border-slate-500"
             : ""
         }`}
      >
        <div className={"flex flex-col p-2 flex-1 font-light  "}>
          <h2 className="text-2xl sm:w-1/2">{title}</h2>
          <small className="font-normal pt-2 pl-4 text-sm">
            {steps.length - 1} steps
          </small>
        </div>
        <div className="xl:w-1/6 border-l-2 flex flex-col justify-center items-center sm:w-1/2 sm:flex-col md:flex   rounded-md    ">
          <span className="text-xl underline font-light"> </span>
          <span className={`${statusColor} `}>{capitalizeWord(status)}</span>
        </div>
      </Link>
      <EditorIcons step={step} />
    </div>
  );
};
export default JobItem;
