import ApplicationItem from "../../components/application-item/application-item.component";
import Search from "../../components/search/search.component";
// import "./application.style.scss";
import { APPLICATION_DATA } from "../../Data";
import { useState, useEffect } from "react";

const Application = () => {
  const [applicationData, setApplicationData] = useState(APPLICATION_DATA);
  const [searchList, setSearchList] = useState(applicationData);
  const [searchValue, setSearchValue] = useState("");
  // useEffect(()=>{
  //    const set_application=async()=>{await setApplicationData(APPLICATION_DATA)}
  //    set_application()
  //    console.log("application-data")
  // },[])

  useEffect(() => {
    let jobStartsWith = applicationData.filter((apps) => {
      const search = `^${searchValue}`;
      const regx = new RegExp(search, "gi");
      return regx.test(apps.job) || regx.test(apps.name);
    });
    setSearchList(jobStartsWith);
  }, [searchValue, applicationData]);
  const searchHandler = (event) => {
    const srhValue = event.target.value;
    setSearchValue(srhValue);
  };

  return (
    <div className="scrollbar-maintains relative h-100  overflow-auto overflow-x-hidden ">
      <div className="application-containers relative flex flex-col w-75 h-5    mt-12 mr-0 mb-12 ml-8">
        <div className="application-headers xl:relative sm:relative md:relative self-center sm:self-center xl:text-3xl italic md:text-4xl sm:text-3xl ">
          Job Applications
        </div>
        <div className="application-search-containers m-3  xl:self-end xl:mt-2 xl:mr-24 xl:m-4 sm:self-center ">
          <Search searchHandler={searchHandler} value={searchValue} />
        </div>
        <div className="application-items-containers self-center">
          {searchList.map((applicant) => {
            return (
              <div className="application-items m-3" key={applicant.id}>
                <ApplicationItem applicant={applicant} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Application;
