import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import "./editor-icons.style.scss";
import { Link } from "react-router-dom";

const EditorIcons = ({ step }) => {
  return (
    <div className="pl-3 flex gap-2">
      <Link to={`/EditJob/${step.title}`} state={step}>
        <AiOutlineEdit className="w-8 h-8 hover:text-blue-700 transition-all hover:scale-125" />
      </Link>
      {/* <AiOutlineDelete className="w-8 h-8 text-red-500 hover:text-red-700 transition-all" /> */}
    </div>
  );
};

export default EditorIcons;
