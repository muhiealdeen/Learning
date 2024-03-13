import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import Button from '../components/button';

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className=" flex flex-1 flex-col">
        {/* <p className="text-xl font-montserrat text-coral-red">
            Our Summer Collection
          </p> */}
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg ">
          <span className=" text-coral-red">Special</span> Offer
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">
          Embrak on on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible saving, we
          offer an paralleled value that set us apart.
        </p>
        <p className=" mt-6 lg:max-w-lg info-text">
          Navigate realm of possibilities designed to fulfill your unique
          desire, surpassing the loftiest except exceptions. Your journey with
          us is nothing short of exceptional.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            corderColor=" border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
