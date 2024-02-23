import Button from '../components/button';
import { arrowRight } from '../assets/icons';
const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col justify-center w-full min-h-screen gap-10 max-container xl:flex-row "
    >
      <div className="relative flex flex-col items-start justify-center w-full xl:w-2/5 max-xl:padding-x pt-28">
        <p>Our Summer Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nike</span>
          Shoes
        </h1>
        <p>
          Discover stylish Nike Arrivals, quality comfort, and innovative for
          your active life.
        </p>
        <Button lable="Shop Now" iconURL={arrowRight} />
        <div className="flex flex-wrap items-start justify-start "></div>
      </div>
    </section>
  );
};

export default Hero;
