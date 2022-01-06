import React from "react";
import "./styles.scss";
const BottomSectionImage = ({ image }) => {
  return (
    <div
      className="bottomSectionImage"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default BottomSectionImage;
