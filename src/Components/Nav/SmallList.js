import React from "react";

function SmallList(props) {
  return (
    <li className="py-1 ps-0.5" onClick={props.onClick}>
      <a
        href={`#${props.ListName}`}
        className=" text-yellow-950 font-semibold hover:text-yellow-50"
      >
        {props.ListName}
      </a>
    </li>
  );
}

export default SmallList;
