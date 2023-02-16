import React from "react";
import PropTypes from "prop-types";

export default function CustomLayout(props) {
  // console.log(props);
  const [top, middle, bottom] = props.children;
  return (
    <div className="container">
      <div className="row">
        <top className="col-lg-12">{top}</top>
        <middle className="col-lg-8">{middle}</middle>
        <bottom className="col-lg-4">{bottom}</bottom>
      </div>
    </div>
  );
}

CustomLayout.propTypes = {
  children: PropTypes.node,
};

CustomLayout.sections = ["top", "middel", "bottom"];
