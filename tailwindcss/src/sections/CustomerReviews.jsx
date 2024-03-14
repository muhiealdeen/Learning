const CustomerReviews = () => {
  return (
    <section className=" max-container">
      <h3 className=" font-palanquin text-center text-4xl font-bold ">
        What Our
        <span className="text-coral-red"> Customer</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Here genuine stories from our satisfied customers about their
        exceptional experience with us.
      </p>
      <div className=" mt:2 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14"></div>
    </section>
  );
};

export default CustomerReviews;
