import React, { useState } from "react";
import FullList from "./FullList";
import SmallList from "./SmallList";

function Navbar(props) {
  const [burger, setBurger] = useState(false);

  function changeBurger() {
    setBurger(!burger);
  }
  function cartCloseBurger() {
    setBurger(!burger);
    props.openViewCart();
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
              <button
                className=" bg-yellow-50 rounded-full w-fit py-2 px-4 hover:drop-shadow-xl hover:scale-105 transition duration-200 hover:ease-in-out text-yellow-950 font-semibold"
                onClick={cartCloseBurger}
              >
                Cart
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 inline -mt-1.5 ms-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
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
                <button
                  className=" bg-yellow-50 text-lg rounded-full py-2 px-4 hover:drop-shadow-xl hover:scale-105 transition duration-200 hover:ease-in-out text-yellow-950 font-semibold w-full"
                  onClick={cartCloseBurger}
                >
                  Cart
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 inline -mt-1.5 ms-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
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
