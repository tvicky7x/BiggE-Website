import React from "react";
import Rates from "./Rates";

function MenuBox(props) {
  const rate = new Array(props.data.dishRate).fill(true);

  return (
    <div className=" w-60 p-3 hover:bg-yellow-200 rounded-b-3xl rounded-t-md hover:scale-105 transition duration-200 hover:ease-in-out group">
      <div className="h-full relative">
        <div className=" rounded-md h-52 w-full overflow-hidden">
          <img
            src={props.data.dishImage}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="text-center mt-2">
          <h3 className=" font-nunito text-2xl font-extrabold text-yellow-950">
            {props.data.dishName}
          </h3>
          <div className=" space-x-1 mb-14 -mt-1.5">
            {rate.map((item) => {
              return (
                <Rates key={Math.floor(Math.random() * 100000).toString(36)} />
              );
            })}
          </div>
        </div>
        <button className="font-semibold bg-yellow-900 w-full text-yellow-50 p-2 rounded-full absolute bottom-0 group-hover:text-yellow-950 group-hover:bg-yellow-50 group-hover:font-bold transition duration-200 group-hover:ease-in-out">
          Order Now - ₹ {props.data.dishPrice}
        </button>
      </div>
    </div>
  );
}

export default MenuBox;
