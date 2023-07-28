import React from "react";

function FullList(props) {
  return (
    <li>
      <a
        href={`#${props.ListName}`}
        className=" text-yellow-950 font-semibold  hover:text-yellow-50"
      >
        {props.ListName}
      </a>
    </li>
  );
}

export default FullList;
