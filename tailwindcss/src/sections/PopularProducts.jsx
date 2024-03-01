import { products } from '../constents/index';
const PopularProducts = () => {
  return (
    <section id="products" className=" max-container max-sm:mt-12">
      <div className=" flex flex-col justify-start gap-5">
        <h2 className=" text-4xl font-palanquin font-bold">
          Our <span>Populer</span> Products
        </h2>
        <p>
          Explore our selection of popular products, curated to meet your needs
          and elevate your lifestyle. From stylish apparel to cutting-edge
          gadgets, we have something for everyone. Dive in and discover your
          next favorite item today
        </p>
      </div>
    </section>
  );
};

export default PopularProducts;
