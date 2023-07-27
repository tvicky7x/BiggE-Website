import React, { useState } from "react";

function Navbar() {
  const [burger, setBurger] = useState(false);

  function changeBurger() {
    setBurger(!burger);
  }
  return (
    <div className="py-3 px-6 bg-yellow-400 drop-shadow-lg">
      <div className="max-w-5xl mx-auto sm:flex sm:justify-between sm:items-center">
        <div className="flex items-center justify-between">
          <span className="text-4xl font-bagel text-yellow-950 -mt-1">
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
              className="w-8 h-8 inline sm:hidden"
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
        <ul className=" hidden sm:flex sm:space-x-6 sm:items-center">
          <li>
            <a
              href="#"
              className=" text-yellow-950 font-semibold  hover:text-yellow-50"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" text-yellow-950 font-semibold  hover:text-yellow-50"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" text-yellow-950 font-semibold  hover:text-yellow-50"
            >
              Contact Us
            </a>
          </li>
          <li>
            <button className="bg-white rounded-full px-5 py-1.5 w-full space-x-2 hover:drop-shadow-sm hover:scale-105 transition duration-200 hover:ease-in-out sm:w-32">
              <span className=" text-yellow-950 font-semibold">Cart</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline-block"
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
          <ul className="space-y-2 sm:hidden mt-2">
            <li className="py-1 ps-0.5" onClick={changeBurger}>
              <a
                href="#"
                className=" text-yellow-950 font-semibold  hover:text-yellow-50"
              >
                Home
              </a>
            </li>
            <li className="py-1 ps-0.5" onClick={changeBurger}>
              <a
                href="#"
                className=" text-yellow-950 font-semibold  hover:text-yellow-50"
              >
                Menu
              </a>
            </li>
            <li className="py-1 ps-0.5" onClick={changeBurger}>
              <a
                href="#"
                className=" text-yellow-950 font-semibold  hover:text-yellow-50"
              >
                Contact Us
              </a>
            </li>
            <li>
              <button
                className="bg-white rounded-full px-5 py-1.5 w-full space-x-2 hover:drop-shadow-sm hover:scale-105 transition duration-200 hover:ease-in-out sm:w-32"
                onClick={changeBurger}
              >
                <span className=" text-yellow-950 font-semibold">Cart</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 inline-block"
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
  );
}

export default Navbar;
