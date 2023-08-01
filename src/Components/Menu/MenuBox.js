import React, { useContext } from "react";
import Rates from "./Rates";
import appContext from "../../appcontext";

function MenuBox(props) {
  const context = useContext(appContext);
  const rate = new Array(props.data.dishRate).fill(true);

  function addedToCart(e) {
    if (e.target.innerHTML !== "View Cart") {
      context.addToCart(props.data);
    } else {
      context.openViewCart();
    }
  }

  return (
    <div className="p-2 sm:p-3 w-1/2 sm:w-1/3 md:w-1/4 group hover:bg-yellow-200 rounded-b-3xl rounded-t-md hover:scale-105 transition duration-200 hover:ease-in-out">
      <div className="pb-14 h-full relative">
        <div className=" w-fit h-fit">
          <img
            src={props.data.dishImage}
            alt={props.data.dishImage}
            className=" rounded-md filter-none"
          />
        </div>
        <h3 className=" w-full font-nunito text-xl font-extrabold text-yellow-950 text-center">
          {props.data.dishName}
        </h3>
        <div className=" space-x-1 -mt-1.5 text-center">
          {rate.map(() => {
            return (
              <Rates key={Math.floor(Math.random() * 100000).toString(36)} />
            );
          })}
        </div>
        <button
          className=" absolute bottom-0 font-semibold bg-yellow-900 w-full text-yellow-50 p-2 rounded-full group-hover:text-yellow-950 group-hover:bg-yellow-50 group-hover:font-bold transition duration-200 group-hover:ease-in-out"
          onClick={addedToCart}
        >
          {props.data.cart
            ? "View Cart"
            : `Order Now - ${props.data.dishPrice}`}
        </button>
      </div>
    </div>
  );
}

export default MenuBox;
