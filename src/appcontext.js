import React, { useState } from "react";

const appContext = React.createContext({
  cardList: [],
  addToCart: () => {},
  foodData: [],
  viewCart: false,
  closeViewCart: () => {},
  openViewCart: () => {},
  deleteFromCart: () => {},
  changeCartQuantity: () => {},
});

export default appContext;

export function AppContextProvide(props) {
  let originalData = [
    {
      dishName: "Hamburger",
      dishPrice: 248,
      dishRate: 5,
      dishQuantity: 1,
      dishImage: "./Images/Hamburger.jpg",
      id: "Hamburger",
      cart: false,
    },
    {
      dishName: "Cheese Pizza",
      dishPrice: 389,
      dishRate: 5,
      dishQuantity: 1,
      dishImage: "./Images/Cheese Pizza.jpg",
      id: "Cheese Pizza",
      cart: false,
    },
    {
      dishName: "Subway Sandwich",
      dishPrice: 175,
      dishRate: 5,
      dishQuantity: 1,
      dishImage: "./Images/Subway Sandwich.jpg",
      id: "Subway Sandwich",
      cart: false,
    },
    {
      dishName: "Veggie Pizza",
      dishPrice: 198,
      dishRate: 4,
      dishQuantity: 1,
      dishImage: "./Images/Veggie Pizza.jpg",
      id: "Veggie Pizza",
      cart: false,
    },
    {
      dishName: "French Fries",
      dishPrice: 97,
      dishRate: 4,
      dishQuantity: 1,
      dishImage: "./Images/French Fries.jpg",
      id: "French Fries",
      cart: false,
    },
    {
      dishName: "Kabab Roll",
      dishPrice: 99,
      dishRate: 3,
      dishQuantity: 1,
      dishImage: "./Images/Kabab Roll.jpg",
      id: "Kabab Roll",
      cart: false,
    },
  ];
  const [viewCart, setViewCart] = useState(false);
  const [foodData, setFoodData] = useState(originalData);
  const [cartList, setCart] = useState([]);

  function closeViewCart() {
    setViewCart(false);
  }

  function openViewCart() {
    setViewCart(true);
  }

  function addToCart(data) {
    setFoodData((previousFoodList) => {
      return previousFoodList.map((item) => {
        if (item.id === data.id) {
          item.cart = true;
        }
        return item;
      });
    });
    setCart((previousCart) => {
      return [...previousCart, data];
    });
  }

  function deleteFromCart(id) {
    setFoodData((previousFoodList) => {
      return previousFoodList.map((item) => {
        if (item.id === id) {
          item.cart = false;
        }
        return item;
      });
    });
    setCart((previousCart) => {
      return previousCart.filter((item) => {
        return item.id !== id;
      });
    });
  }
  function changeCartQuantity(id, value) {
    let newCartData = cartList.map((item) => {
      if (item.id === id) {
        let Quantity = item.dishQuantity + value;
        if (Quantity > 0) {
          item.dishQuantity = Quantity;
        }
      }
      return item;
    });
    setCart(newCartData);
  }

  return (
    <appContext.Provider
      value={{
        cardList: cartList,
        addToCart: addToCart,
        foodData: foodData,
        viewCart: viewCart,
        closeViewCart: closeViewCart,
        openViewCart: openViewCart,
        deleteFromCart: deleteFromCart,
        changeCartQuantity: changeCartQuantity,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
}
