import React from "react";
import { retry } from "statuses";

export default function RamdomPictureRender() {
  const styles = {
    height: "250px",
    margin: "10px",
  };
  return (
    <div className="container">
      <img src="https://picsum.photos/250/360" />
    </div>
  );
}
