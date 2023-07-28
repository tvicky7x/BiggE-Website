import React from "react";
import MenuBox from "./MenuBox";

function Menu(props) {
  return (
    <section className="px-6 py-8 bg-yellow-100 sm:px-12" id="Menu">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-4xl font-bagel text-yellow-950">
          Our Menu
        </h2>
        <p className="text-center text-yellow-950 text-lg">
          We have mouthwatering delectable dishes for your taste
        </p>
        <div className="mt-4 sm:mt-6 flex flex-wrap justify-center">
          {props.data.map((item) => {
            item.id = Math.floor(Math.random() * 100000).toString(36);
            return <MenuBox data={item} key={item.id} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Menu;
