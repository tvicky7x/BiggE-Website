import { useState } from "react";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import HeroSection from "./Components/Hero/HeroSection";
import Menu from "./Components/Menu/Menu";
import Navbar from "./Components/Nav/Navbar";
import Cart from "./Components/Cart/Cart";

function App() {
  let originalData = [
    {
      dishName: "Hamburger",
      dishPrice: 248,
      dishRate: 5,
      dishImage: "./Images/Hamburger.jpg",
      id: "Hamburger",
      cart: false,
    },
    {
      dishName: "Cheese Pizza",
      dishPrice: 389,
      dishRate: 5,
      dishImage: "./Images/Cheese Pizza.jpg",
      id: "Cheese Pizza",
      cart: false,
    },
    {
      dishName: "Subway Sandwich",
      dishPrice: 175,
      dishRate: 5,
      dishImage: "./Images/Subway Sandwich.jpg",
      id: "Subway Sandwich",
      cart: false,
    },
    {
      dishName: "Veggie Pizza",
      dishPrice: 198,
      dishRate: 4,
      dishImage: "./Images/Veggie Pizza.jpg",
      id: "Veggie Pizza",
      cart: false,
    },
    {
      dishName: "French Fries",
      dishPrice: 97,
      dishRate: 4,
      dishImage: "./Images/French Fries.jpg",
      id: "French Fries",
      cart: false,
    },
    {
      dishName: "Kabab Roll",
      dishPrice: 99,
      dishRate: 3,
      dishImage: "./Images/Kabab Roll.jpg",
      id: "Kabab Roll",
      cart: false,
    },
  ];
  const [foodData, setFoodData] = useState(originalData);
  const [viewCart, setViewCart] = useState(false);
  const [cartData, setCartData] = useState([]);

  function closeViewCart(e) {
    setViewCart(false);
  }

  function openViewCart() {
    setViewCart(true);
  }

  function addCartData(data) {
    let newFoodData = foodData.map((item) => {
      if (item.id === data.id) {
        item.cart = true;
      }
      return item;
    });
    setFoodData(newFoodData);
    let newCartData = [...cartData, data];
    setCartData(newCartData);
  }

  function removeCartData(id) {
    let newCartData = cartData.filter((item) => {
      if (item.id === id) {
        item.cart = false;
      }
      return item.id !== id;
    });
    setCartData(newCartData);
  }

  function changeQuantity(id, value) {
    let newCartData = cartData.map((item) => {
      if (item.id === id) {
        let Quantity = item.dishQuantity + value;
        if (Quantity > 0) {
          item.dishQuantity = Quantity;
        }
      }
      return item;
    });
    setCartData(newCartData);
  }

  return (
    <>
      <div className={viewCart ? `h-screen overflow-hidden` : ""}>
        <Navbar
          pages={["Home", "Menu", "About Us", "Contact Us"]}
          openViewCart={openViewCart}
          cartData={cartData}
        />
        <HeroSection heroPrice={"299"} />
        <Menu
          data={foodData}
          openViewCart={openViewCart}
          addCartData={addCartData}
        />
        <AboutUs />
        <ContactUs />
      </div>
      {viewCart && (
        <Cart
          closeViewCart={closeViewCart}
          data={cartData}
          removeCartData={removeCartData}
          changeQuantity={changeQuantity}
        />
      )}
    </>
  );
}

export default App;
