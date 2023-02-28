import { MdClose } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [searchIcon, setSearchIcon] = useState(false);
  const [results, setResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  const searchClickHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/position/search",
        {
          query: searchText,
        }
      );
      setResults(response.data);
      setSearchIcon(true);
      console.log(response.data);
    } catch (error) {
      console.error("Failed to search:", error);
    }
  };

  const searchChangeHandler = (event) => {
    setSearchText(event.target.value);
  };

  const clearHandler = () => {
    setSearchText("");
    setResults([]);
  };

  return (
    <div className="search-containers flex relative w-52   delay-300 ease-in m-2   ">
      <form onSubmit={searchClickHandler}>
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          className="border h-8 p-2  border-gray-300 rounded-md  focus:border-black "
          onChange={searchChangeHandler}
        />
        <CiSearch
          className="search-icons text-2xl absolute top-1 ms-1 me-1 right-3"
          onClick={searchClickHandler}
        />
      </form>

      {results.length > 0 ? (
        <div className="search-results absolute top-10 left-0 right-0 z-50 bg-white rounded-md shadow-md">
          <ul>
            {results.map((result) => (
              <li key={result._id} className="p-2 border-b">
                <h3>{result.title}</h3>
              </li>
            ))}
          </ul>
          <button className="btn-clear" onClick={clearHandler}>
            Clear
          </button>
        </div>
      ) : (
        searchText && (
          <div className="no-results absolute top-10 left-0 right-0 z-50 bg-white rounded-md shadow-md p-2">
            No positions found
          </div>
        )
      )}
    </div>
  );
};

export default Search;
