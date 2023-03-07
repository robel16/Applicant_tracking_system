import CreateIcon from "../../components/create-icon/create-icon.component";
import JobItem from "../../components/job-item/job-item.component";
import "./job.style.scss";
import { Link } from "react-router-dom";
import { DATA } from "../../Data";
//need a little clean up for response
const Jobs = () => {
  return (
    <div className="jobs-containers block mt-1 mr-2 mb-1 ml-24 p-4 w-70 h-3 ">
      <h1 className=" jobs-titles mt-12 mr-auto mb-5 ml-2 italic text-3xl  ">
        Jobs
      </h1>
      <div className="create-jobs relative flex justify-end mt-1 mr-16 mb-5 ml-1 right-8">
        <h1 className="absolute inline text-2xl right-14 top-2">create job</h1>
        <Link to="createjob">
          {" "}
          <CreateIcon />{" "}
        </Link>
      </div>
      <div className="jobs-list ">
        {DATA.map((step, i) => {
          return (
            <div className="my-3" key={i}>
              <JobItem step={step} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Jobs;
