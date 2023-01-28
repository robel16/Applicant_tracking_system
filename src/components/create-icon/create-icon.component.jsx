import "./create-icon.style.scss";
import { AiOutlinePlus } from "react-icons/ai";

const CreateIcon = ({ buttonType }) => {
  return (
    <div
      className={`${
        buttonType
          ? buttonType
          : "fills flex items-center justify-center w-12 h-12 border border-black border-solid rounded-full bg-cust-secondary hover:bg-cust-primary hover:transform duration-200 [&>*]:hover:text-cust-secondary  "
      }`}
    >
      <AiOutlinePlus className={`plus-icons text-2xl text-cust-primary  `} />
    </div>
  );
};

export default CreateIcon;
