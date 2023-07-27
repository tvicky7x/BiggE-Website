import React from "react";

function HeroSection(props) {
  return (
    <section className="py-10 px-6 bg-yellow-100 sm:px-12">
      <div className="sm:flex max-w-5xl mx-auto justify-between">
        <div className=" sm:order-2 sm:w-1/2 animate-heroBurger sm:flex">
          <img
            src="./Hero Hamburger-NoBackground.png"
            alt=""
            className=" w-80 mx-auto  sm:max-w-none sm:w-full sm:self-center"
          />
        </div>
        <div className="max-w-sm sm:my-auto my-6 sm:max-w-md sm:me-3 animate-heroTitle">
          <h1 className=" font-bagel text-5xl text-yellow-950 sm:text-6xl">
            Love Every Bite
          </h1>
          <p className="text-lg mb-5 mt-3">
            Get your hands on our special double cheese burger now
          </p>
          <button className=" bg-yellow-900 py-1.5 px-4 rounded-full font-semibold text-yellow-50 hover:scale-105 hover:drop-shadow-lg">
            Oder Now
          </button>
          <span className=" text-yellow-950 font-semibold ps-3">
            ₹ {props.heroPrice}
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
