import React from "react";
import PropTypes from "prop-types";

export default function ColorBlock({ customFields }) {
  const { hexCode } = customFields;
  // console.log(hexCode);

  /**
   * Generates random values for the given rgb array.
   */
  let rgb = [];
  for (var i = 0; i < 3; i++) {
    let r = Math.floor(Math.random() * 256);
    rgb.push(r);
  }

  /*set a fallback value for rgb if the editor does not provide one */
  const bgColor = hexCode ? `#${hexCode}` : `rgb(${rgb})`;

  /* set styles for color block */
  const styles = {
    height: "250px",
    margin: "10px",
    backgroundColor: bgColor,
  };

  return <div className="container" style={styles}></div>;
}

/*make the feature run server side */
ColorBlock.static = true;

/*Add in a Custom Field that will allow PageBuilder editors to input a hex code */
ColorBlock.propTypes = {
  customFields: PropTypes.shape({
    hexCode: PropTypes.string.tag({
      label: "Hex Code",
      description: "Please enter a valid color hex value. For example, 6b5d96.",
    }),
  }),
};
