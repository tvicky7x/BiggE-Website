import { useContext } from "react";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import HeroSection from "./Components/Hero/HeroSection";
import Menu from "./Components/Menu/Menu";
import Navbar from "./Components/Nav/Navbar";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import appContext from "./appcontext";

function App() {
  const context = useContext(appContext);

  return (
    <>
      <div className={context.viewCart ? `h-screen overflow-hidden` : ""}>
        <Navbar pages={["Home", "Menu", "About Us", "Contact Us"]} />
        <HeroSection heroPrice={"299"} />
        <Menu />
        <AboutUs />
        <ContactUs />
        <Footer />
      </div>
      {context.viewCart && <Cart />}
    </>
  );
}

export default App;
