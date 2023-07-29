import React from "react";

function HeroSection(props) {
  return (
    <section className="px-4 py-8 bg-yellow-100 sm:px-12 sm:py-14" id="Home">
      <div className=" max-w-5xl mx-auto sm:flex sm:justify-between">
        <div className="animate-heroBurger sm:order-2 sm:w-5/12 sm:flex">
          <img
            src="./Images/Hero Hamburger-NoBackground.png"
            alt=""
            className=" w-64 mx-auto sm:max-w-none sm:w-full sm:self-center"
          />
        </div>
        <div className="mt-3 animate-heroTitle sm:max-w-md sm:me-3 sm:my-auto">
          <h1 className=" font-bagel text-5xl text-yellow-950 sm:text-6xl">
            Love Every Bite
          </h1>
          <p className="text-lg mb-7 mt-3">
            Get your hands on our special double cheese burger now
          </p>

          <button className=" w-full sm:w-fit bg-yellow-900 py-2 px-4 rounded-full font-semibold text-yellow-50 hover:scale-105 hover:drop-shadow-xl transition-all duration-200 hover:ease-in-out">
            Oder Now - ₹ {props.heroPrice}
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
