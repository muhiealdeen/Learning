import Button from '../components/button';

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className=" flex justify-between items-center max-lg:flex-col gap-10 w-full max-container "
    >
      <div className=" flex flex-1 flex-col">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg ">
          We Provide You
          <span className=" text-coral-red">Super</span>
          <span className=" text-coral-red"> Quality </span>
          Shoes
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and the style, our meticulous crafted
          footwear is designed to elevate your experience, providing you with
          unmatched quality,innovation and touch of Elegance.
        </p>

        <Button label="View details" />
      </div>
      SuperQuality
    </section>
  );
};

export default SuperQuality;
