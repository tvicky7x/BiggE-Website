import React from "react";
import Rates from "./Rates";

function MenuBox(props) {
  const rate = new Array(props.data.dishRate).fill(true);

  return (
    <div className="p-3 group hover:bg-yellow-200 rounded-b-3xl rounded-t-md hover:scale-105 transition duration-200 hover:ease-in-out">
      <div className="pb-14 h-full relative">
        <div className=" w-48 h-48 rounded-md overflow-hidden">
          <img src={props.data.dishImage} alt="" />
        </div>
        <h3 className=" w-48 font-nunito text-xl font-extrabold text-yellow-950 text-center">
          {props.data.dishName}
        </h3>
        <div className=" space-x-1 -mt-1.5 text-center">
          {rate.map(() => {
            return <Rates />;
          })}
        </div>
        <button className=" absolute bottom-0 font-semibold bg-yellow-900 w-full text-yellow-50 p-2 rounded-full group-hover:text-yellow-950 group-hover:bg-yellow-50 group-hover:font-bold transition duration-200 group-hover:ease-in-out">
          Order Now - {props.data.dishPrice}
        </button>
      </div>
    </div>
  );
}

export default MenuBox;
