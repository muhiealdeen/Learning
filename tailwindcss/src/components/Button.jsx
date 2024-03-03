const Button = ({ label, iconURL, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 py-4 text-lg leading-none text-white border rounded-full px-7 font-montserrat bg-coral-red border-coral-red mt-4"
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
