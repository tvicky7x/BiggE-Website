import React from "react";

function Navbar() {
  return (
    <div className="p-3 bg-yellow-400">
      <div className="max-w-6xl mx-auto flex">
        <h1 className=" text-4xl font-bagel text-yellow-950">BiggE</h1>
        <div className=" ms-auto">
          <div className=" w-28 bg-white h-full rounded-full text-center flex items-center justify-center space-x-2">
            <div className=" font-semibold text-yellow-950 text-lg">Cart</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
