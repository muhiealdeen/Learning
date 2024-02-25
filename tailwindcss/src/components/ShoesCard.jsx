const ShoesCard = ({ imgURL, changeShoeImage, bigShoImage }) => {
  const handleClick = () => {
    changeShoeImage(imgURL);
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoImage === imgURL ? 'border-coral-red' : 'border-transparent'
      } cursor-pointer max-sm:flex-1 `}
      onClick={handleClick}
    >
      ShoesCard
    </div>
  );
};

export default ShoesCard;
