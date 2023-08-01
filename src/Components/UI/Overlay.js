import React, { useContext } from "react";
import appContext from "../../appcontext";

function Overlay(props) {
  const context = useContext(appContext);
  const classes = "h-full backdrop-blur-sm " + props.className;
  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-yellow-950 bg-opacity-40">
      <div className={classes} onClick={context.closeViewCart}></div>
    </div>
  );
}

export default Overlay;
