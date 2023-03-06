import React from "react";
import Search from "../../components/search/search.component";
import axios from "axios";

import { useEffect, useState } from "react";
import JoblistCard from "../../components/JoblistCard/JoblistCard.component";

const Joblist = () => {
  const [joblists, setJoblists] = useState([]);

  const fetchjoblists = () => {
    const res = axios
      .get("http://localhost:4000/api/position")
      .then((res) => {
        //  console.log(res.data.positions)
        setJoblists(res.data.positions);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchjoblists();
  }, []);

  let jobs = joblists.map((job, _id) => <JoblistCard job={job} key={_id} />);
  // console.log(jobs)
  return (
    <>
      <div className="relative  left-[60%] w-0 h-10 p-4">
        <Search />
      </div>
      <span className="  top-[10%] left-[20%] p-4   h-10  font-semibold text-xl ">
        JOB Lists
      </span>
      <div className="flex flex-col">{jobs}</div>
    </>
  );
};

export default Joblist;
