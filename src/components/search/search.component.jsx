import { CiSearch } from "react-icons/ci";
import { useState } from "react";
// import "./search.style.scss";
const Search = ({ searchHandler, value }) => {
  const [searchIcon, setSearchIcon] = useState(false);
  const searchClickHandler = () => {
    setSearchIcon(true);
  };

  return (
    <div className="search-containers flex relative w-52   delay-300 ease-in m-2  ">
      <input
        type="text"
        placeholder="Search"
        value={value}
        className="border h-8 p-2  border-gray-300 rounded-md  focus:border-black "
        onChange={searchHandler}
      />
      <CiSearch
        className=" search-icons text-2xl absolute  top-1 ms-1 me-1 right-3 "
        onClick={searchClickHandler}
      />
    </div>
  );
};
export default Search;
