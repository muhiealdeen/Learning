const ShoesCard = ({ imgURL, changeShoeImage, bigShoImg }) => {
  const handleClick = () => {
    if (bigShoImg !== imgURL.bigShoe) {
      changeShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoImg === imgURL ? 'border-coral-red' : 'border-transparent'
      } cursor-pointer max-sm:flex-1 `}
      onClick={handleClick}
    >
      <div>
        <img
          src={imgURL.thumbnail}
          alt="Shoe Collection"
          width={127}
          height={103}
          className="object-contain "
        />
      </div>
    </div>
  );
};

export default ShoesCard;
