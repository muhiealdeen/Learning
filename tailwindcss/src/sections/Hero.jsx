import Button from '../components/button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constents';
import { bigShoe1 } from '../assets/images';
import ShoesCard from '../components/ShoesCard';
const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col justify-center w-full min-h-screen gap-10 max-container xl:flex-row "
    >
      <div className="relative flex flex-col items-start justify-center w-full xl:w-2/5 max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike Arrivals, quality comfort, and innovative for
          your active life.
        </p>
        <Button lable="Shop Now" iconURL={arrowRight} />
        <div className="flex flex-wrap items-start justify-start w-full gap-16 mt-20">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=" relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoe1}
          alt="Shoe collection"
          width={610}
          height={610}
          className="object-contain relative z-10" // Replace 'bigShoeImge' with a valid image source
        />
        <div>
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoesCard
                imgURL={shoe}
                changeBigShoeImge={() => {}}
                bigShoeImg=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
