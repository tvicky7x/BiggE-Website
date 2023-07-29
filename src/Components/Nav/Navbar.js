import React, { useState } from "react";
import FullList from "./FullList";
import SmallList from "./SmallList";

function Navbar(props) {
  const [burger, setBurger] = useState(false);

  function changeBurger() {
    setBurger(!burger);
  }
  return (
    <>
      <div className="py-4 px-4 bg-yellow-400 drop-shadow-lg sm:px-12 relative">
        <div className="max-w-5xl mx-auto sm:flex sm:justify-between sm:items-center">
          <div className="flex items-center justify-between">
            <span
              className="text-3xl sm:text-4xl font-bagel text-yellow-950 cursor-pointer"
              href="#"
            >
              BiggE
            </span>
            {!burger && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 inline sm:hidden"
                onClick={changeBurger}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}

            {burger && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 inline sm:hidden ring-4 rounded-md ring-yellow-300"
                onClick={changeBurger}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
          {/* Navbar for Full Screen */}
          <ul className=" hidden sm:flex sm:space-x-5 sm:items-center">
            {props.pages.map((item) => {
              return <FullList ListName={item} key={item} />;
            })}
            <li>
              <button className=" bg-yellow-50 rounded-full w-fit py-2 px-4 hover:drop-shadow-xl hover:scale-105 transition duration-200 hover:ease-in-out text-yellow-950 font-semibold">
                Cart
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 inline-block ms-2 font-bold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </button>
            </li>
          </ul>
          {/* Navbar for Mobile screen */}
          {burger && (
            <ul className=" absolute left-0 mt-0.5 w-full space-y-1 sm:hidden px-6 pb-4 rounded-b-3xl bg-yellow-400">
              {props.pages.map((item) => {
                return (
                  <SmallList
                    ListName={item}
                    onClick={changeBurger}
                    key={item}
                  />
                );
              })}
              <li>
                <button className=" bg-yellow-50 text-lg rounded-full py-2 px-4 hover:drop-shadow-xl hover:scale-105 transition duration-200 hover:ease-in-out text-yellow-950 font-semibold w-full">
                  Cart
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 inline-block ms-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
