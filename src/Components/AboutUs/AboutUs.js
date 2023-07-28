import React from "react";
import Container from "../UI/Container";

function AboutUs() {
  return (
    <Container id={"About Us"}>
      <div className=" flex justify-evenly items-center gap-5 flex-wrap">
        <div className=" w-80 h-80 bg-yellow-300 p-3 drop-shadow-xl rounded-md hover:scale-105 transition duration-200 hover:ease-in-out">
          <img
            src="./Images/Burger Restaurant.jpg"
            alt=""
            className=" w-full h-full object-bottom object-cover rounded-md"
          />
        </div>
        <div className="sm:w-96">
          <h2 className="text-center text-4xl font-bagel text-yellow-950">
            About Us
          </h2>
          <p className="text-center text-yellow-950 text-lg mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <div className="mt-4 max-w-sm mx-auto py-2 px-1 bg-yellow-400 drop-shadow-xl rounded-md flex justify-evenly flex-wrap gap-1">
            <div className="space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 inline text-yellow-950"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                />
              </svg>
              <p className="text-yellow-950 font-semibold inline text-sm">
                Fast Delivery
              </p>
            </div>
            <div className="space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 inline text-yellow-950"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                />
              </svg>
              <p className="text-yellow-950 font-semibold inline text-sm">
                Fresh Food
              </p>
            </div>
            <div className="space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 inline text-yellow-950"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-yellow-950 font-semibold inline text-sm">
                Free Delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AboutUs;
