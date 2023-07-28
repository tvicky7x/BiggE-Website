import HeroSection from "./Components/Hero/HeroSection";
import Menu from "./Components/Menu/Menu";
import Navbar from "./Components/Nav/Navbar";

function App() {
  const FoodData = [
    {
      dishName: "Hamburger",
      dishPrice: 248,
      dishRate: 5,
      dishImage: "./Images/Hamburger.jpg",
    },
    {
      dishName: "Cheese Pizza",
      dishPrice: 389,
      dishRate: 5,
      dishImage: "./Images/Cheese Pizza.jpg",
    },
    {
      dishName: "Subway Sandwich",
      dishPrice: 175,
      dishRate: 5,
      dishImage: "./Images/Subway Sandwich.jpg",
    },
    {
      dishName: "Veggie Pizza",
      dishPrice: 198,
      dishRate: 4,
      dishImage: "./Images/Veggie Pizza.jpg",
    },
    {
      dishName: "French Fries",
      dishPrice: 97,
      dishRate: 4,
      dishImage: "./Images/French Fries.jpg",
    },
    {
      dishName: "Kabab Roll",
      dishPrice: 99,
      dishRate: 3,
      dishImage: "./Images/Kabab Roll.jpg",
    },
  ];

  return (
    <>
      <header>
        <Navbar pages={["Home", "Menu", "About Us", "Contact Us"]} />
      </header>
      <HeroSection heroPrice={"299"} />
      <Menu data={FoodData} />
    </>
  );
}

export default App;
