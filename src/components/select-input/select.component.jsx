// import "./select.style.scss";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import { capitalize } from "../../utils";

const types = {
  file_types: ["audio", "file", "picture", "text", "video"],
  status_types: ["approved", "disapproved", "active", "inactive"],
};

const SelectInput = ({
  selectInputHandler,
  index,
  selected,
  selected_type,
}) => {
  const [toggleSelect, setToggleSelect] = useState(false);

  const clickHandler = () => {
    setToggleSelect(!toggleSelect);
  };

  return (
    <div className="selects text-sm font-Quicksand   border-b-2 border-b-solid border-l-2 border-l-solid  relative rounded-[10px] pt-1 pr-2 pb-1 pl-2 w-36 ">
      <div
        onClick={clickHandler}
        className="selected-containers relative top-2 "
      >
        <span className="selecteds inline-block relative mt-0 mr-0 mb-1 ml-2 text-xl cursor-pointer ">
          {selected ? capitalize(selected) : "types"}
        </span>
        <FaAngleDown
          className={`${
            toggleSelect ? "select-icon-reverses  rotate-180" : ""
          } select-icons  text-[20px] absolute right-[1%] top-[7px] transition duration-200 ease-out transform`}
        />
      </div>

      <div className="selectables-containers ">
        {toggleSelect &&
          types[selected_type].map((selectable, i) => {
            return (
              <div
                className="selectable-containers text-xl m-1 ms-1 me-0 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[60%] after:trasfrom after:scale-x-0 after:bg-black after:transition after:duration-[50ms] hover:after:scale-x-[1px] hover:after:ease-linear "
                key={i}
              >
                <input
                  type="radio"
                  className="radio-buttons hidden"
                  onClick={clickHandler}
                  onChange={(event) => selectInputHandler(event, index)}
                  name="categories"
                  value={selectable}
                  id={selectable}
                  required
                />
                <label htmlFor={selectable}>{capitalize(selectable)}</label>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default SelectInput;
