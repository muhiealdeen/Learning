import Button from '../components/button'; // Import the Button component
const Subscribe = () => {
  return (
    <section className=" max-container flex justfy-between items-center max-lg:flex-col gap-10">
      <h3 className=" text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up Form
        <span className="text-coral-red"> Updates</span> & Newsletter
      </h3>

      <div>
        <input
          type="text"
          placeholder=" subscribe@nike.com"
          className=" input "
        />
        <div>
          <Button label="Sign Up" fullWidth />{' '}
          {/* Use the imported Button component */}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
