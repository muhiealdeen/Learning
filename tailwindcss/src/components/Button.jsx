const Button = ({ lable, iconURL }) => {
  return (
    <button className="">
      {lable}
      <img
        src={iconURL}
        alt="arrow right icon"
        className="w-5 h-5 ml-2 rounded-full"
      />
    </button>
  );
};

export default Button;
