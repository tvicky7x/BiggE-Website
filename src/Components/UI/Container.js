import React from "react";

function Container(props) {
  return (
    <section className="px-6 py-8 bg-yellow-100 sm:px-12" id={props.id}>
      <div className="max-w-5xl mx-auto">{props.children}</div>
    </section>
  );
}

export default Container;
