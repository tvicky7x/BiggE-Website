import React from "react";

function Overlay(props) {
  const classes = "h-full backdrop-blur-sm " + props.className;
  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-yellow-950 bg-opacity-40">
      <div className={classes}>{props.children}</div>
    </div>
  );
}

export default Overlay;
