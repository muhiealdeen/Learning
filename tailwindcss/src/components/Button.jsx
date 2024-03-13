const Button = ({
  label,
  iconURL,
  onClick,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
      ${
        backgroundColor
          ? ` ${backgroundColor} ${textColor} ${borderColor}`
          : `text-white  bg-coral-red border-coral-red `
      }  rounded-full`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="w-5 h-5 ml-2 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
