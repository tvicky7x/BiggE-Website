import React from "react";

function CartList(props) {
  return (
    <li className=" flex space-x-3">
      <div className=" shrink-0 flex p-1">
        <img
          src={props.data.dishImage}
          alt=""
          className=" w-16 sm:w-28 rounded-md self-center"
        />
      </div>
      <div className="w-full flex content-center sm:space-y-2 space-y-1 flex-wrap">
        <div className="p-1 w-full h-fit text-yellow-950 sm:text-xl text-lg font-semibold flex justify-between">
          <p>{props.data.dishName}</p>
          <p className="font-bold">₹ {props.data.dishPrice}</p>
        </div>
        <div className="p-1 w-full h-fit flex">
          <p className=" text-yellow-950 font-medium">Qty :</p>
          <div className="flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </div>
            <div>
              <input
                type="text"
                inputMode="numeric"
                className=" w-8 text-center border-2"
                value={props.data.dishQuantity}
                readOnly
                min={1}
              />
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>
            </div>
          </div>
          <button className=" text-red-600 font-semibold text-lg ms-auto">
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}

export default CartList;
