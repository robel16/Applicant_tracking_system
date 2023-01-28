// import "./text-input.style.scss";

const TextInput = ({ ...otherProps }) => {
  return (
    <input
      type="text"
      className="input-fields ms-1 me-2 xl:w-700 md:w-1/2  h-2 border-0 border-b-2 border-[#BFBFBF] rounded-xl  p-7 text-xl font-Quicksand focus:outline-none focus:border focus:border-l-0 focus:border-r-0 focus:border-b-2 focus:border-t-0  "
      {...otherProps}
      required
    />
  );
};
export default TextInput;
