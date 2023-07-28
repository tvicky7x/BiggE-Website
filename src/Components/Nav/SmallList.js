import React from "react";

function SmallList(props) {
  return (
    <li className="py-4 px-1.5 text-center" onClick={props.onClick}>
      <a
        href={`#${props.ListName}`}
        className=" text-yellow-950 font-semibold text-lg hover:text-yellow-50"
      >
        {props.ListName}
      </a>
    </li>
  );
}

export default SmallList;
