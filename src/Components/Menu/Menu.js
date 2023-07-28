import React from "react";
import MenuBox from "./MenuBox";
import Container from "../UI/Container";

function Menu(props) {
  return (
    <>
      <Container id={"Menu"}>
        <h2 className="text-center text-4xl font-bagel text-yellow-950">
          Our Menu
        </h2>
        <p className="text-center text-yellow-950 text-lg">
          We have mouthwatering delectable dishes for your taste
        </p>
        <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-3">
          {props.data.map((item) => {
            item.id = Math.floor(Math.random() * 100000).toString(36);
            return <MenuBox data={item} key={item.id} />;
          })}
        </div>
      </Container>
    </>
  );
}

export default Menu;
