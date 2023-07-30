import React from "react";
import ReactDOM from "react-dom";
import Overlay from "../UI/Overlay";
import CartList from "./CartList";

function Cart(props) {
  const total = props.data.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.dishPrice * currentValue.dishQuantity;
  }, 0);
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay className="flex justify-center items-center px-4 py-8 overflow-auto">
          <div className=" bg-white sm:p-5 p-4 w-128 rounded-md drop-shadow-2xl my-auto">
            <h3 className=" text-yellow-950 text-center text-2xl font-medium relative">
              Your Cart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline -mt-1 ms-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <div
                className="inline-block absolute right-0  hover:scale-110 rounded-md bg-yellow-300 transition duration-200 hover:ease-in-out cursor-pointer"
                onClick={props.closeViewCart}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 inline"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </h3>
            {props.data.length === 0 && (
              <div className="p-3 mt-5 bg-yellow-200 rounded-md text-center">
                <h4 className="text-xl font-semibold">
                  Your Cart is Empty
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 inline ms-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                    />
                  </svg>
                </h4>
                <button
                  className="mt-4 py-2 w-40 px-4 bg-yellow-900 rounded-full font-semibold  text-yellow-50 hover:scale-105 hover:drop-shadow-xl transition-all duration-200 hover:ease-in-out"
                  onClick={props.closeViewCart}
                >
                  Order Now
                </button>
              </div>
            )}

            {props.data.length > 0 && (
              <div className="mt-5">
                <ul className=" divide-y-2">
                  {props.data.map((item) => {
                    return (
                      <CartList
                        data={item}
                        key={item.id}
                        removeCartData={props.removeCartData}
                        changeQuantity={props.changeQuantity}
                      />
                    );
                  })}
                </ul>
                <div className="mt-10 border-t-2 border-yellow-500">
                  <div className=" text-yellow-950 font-semibold text-lg flex justify-between  py-1">
                    <p>Total</p>
                    <p className=" font-bold">₹ {total}</p>
                  </div>
                  <button
                    className=" mt-3 py-2 px-4 font-semibold bg-yellow-900 text-yellow-50 rounded-md w-full hover:scale-105 hover:ease-in-out transition duration-200 hover:drop-shadow-2xl"
                    onClick={props.closeViewCart}
                  >
                    Checkout
                  </button>
                  <p className=" text-center mt-1 text-slate-500">
                    or{" "}
                    <span
                      className=" text-yellow-500 cursor-pointer"
                      onClick={props.closeViewCart}
                    >
                      Continue Shopping{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 inline"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                      </svg>
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </Overlay>,
        document.getElementById("cart")
      )}
    </>
  );
}

export default Cart;
