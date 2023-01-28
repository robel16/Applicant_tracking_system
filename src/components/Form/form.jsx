// import "./form.style.scss";

const FormInput = ({ children, label, icon, ...otherprops }) => {
  return (
    <div className="groups relative mt-11 ">
      <input
        className="form-inputs bg-none bg-white text-secondary-color text-[15px] pt-[10px] pr-[10px] pb-[1px] pl-[35px] block w-[100%]  rounded-[0]  border-b-2 border-b-sub-color mb-6 focus:outline-none "
        {...otherprops}
      ></input>

      {icon && (
        <span className="icons absolute top-2 text-md text-sub-color">
          {icon}
        </span>
      )}
      <label
        className={`${
          otherprops.value
            ? "shrinks -top-4 left-[2px] text-xs text-sub-color"
            : ""
        } form-input-labels text-sub-color text-md font-normal absolute pointer-events-none left-10 top-2 transform transition duration-300 ease-in`}
      >
        {label}
      </label>
    </div>
  );
};
export default FormInput;
