import HeroSection from "./Components/Hero/HeroSection";
import Navbar from "./Components/Nav/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <HeroSection heroPrice={"299"} />
    </>
  );
}

export default App;
