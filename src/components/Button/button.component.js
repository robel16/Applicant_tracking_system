import "./button.style.scss";
const Button = ({ children, buttonType, ...otheratters }) => {
  return (
    <button
      {...otheratters}
      className={`${
        buttonType
          ? buttonType
          : "buttons w-24 h-8 border border-solid border-black rounded-md text-xl bg-gradient-to-r bg-white hover hover:translate-y-0.5 hover:from-cust-primary hover:to-cust-secondary-darken hover:drop-shadow-2xl"
      }`}
    >
      {children}
    </button>
  );
};
export default Button;
