import React, { useContext } from "react";
import MenuBox from "./MenuBox";
import Container from "../UI/Container";
import appContext from "../../appcontext";

function Menu() {
  const context = useContext(appContext);
  return (
    <>
      <Container id={"Menu"}>
        <h2 className="text-center text-4xl font-bagel text-yellow-950">
          Our Menu
        </h2>
        <p className="text-center text-yellow-950 text-lg">
          We have mouthwatering delectable dishes for your taste
        </p>
        <div className="mt-4 sm:mt-6 flex flex-wrap justify-center">
          {context.foodData.map((item) => {
            return <MenuBox data={item} key={item.id} />;
          })}
        </div>
      </Container>
    </>
  );
}

export default Menu;
