import React from "react";

export default function DefaultChain(props) {
  return (
    <div
      className="chain | default bg-light"
      style={{ padding: "30px" }}
      id={props.id}
    >
      {props.children}
    </div>
  );
}
