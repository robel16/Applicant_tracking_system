import { AiOutlineDelete } from "react-icons/ai";

import "./delete-icon.style.scss";
import { useState } from "react";
const DeleteIcon = () => {
  const [deleteClicked, setDeleteClicked] = useState(false);
  const deleteHandler = () => {
    setDeleteClicked(true);
  };
  const noHandler = () => {
    setDeleteClicked(false);
  };
  return (
    <div className="delete-containers flex flex-col w-[250px]">
      <div
        className="delete-icon-containers self-center flex justify-center items-center w-[50px] h-[50px] border border-solid hover:border hover:border-[#f71717] hover:border-solid rounded-[50%]  "
        onClick={deleteHandler}
      >
        <AiOutlineDelete className="delete-icons text-2xl text-[#f71717] " />
      </div>
      {deleteClicked && (
        <div className="confirm-deletes mt-5 sm:float-right text-md p-2 rounded-[10px] xl:overflow-hidden sm:overflow-hidden md:overflow-hidden animate-transition transfrom  transform  ">
          Are You Sure You Want to delete?
          <br></br>
          <div className="yes-no-containers mt-3">
            <span className="delete-yess border border-solid border-green-700 bg-green-700 text-white p-1 rounded-[10px] ms-1 me-2 cursor-pointer">
              Yes
            </span>
            <span
              className="delete-nos border border-solid border-[#f71717] bg-[#f71717] text-white p-1 rounded-[10px] ms-1 me-2 cursor-pointer "
              onClick={noHandler}
            >
              No
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
export default DeleteIcon;
