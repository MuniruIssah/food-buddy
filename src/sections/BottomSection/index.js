import React from "react";
import BottomSectionImage from "../../components/BottomSectionImage";
import food1 from "../../assests/food1.jpg";
import food2 from "../../assests/food2.jpg";
import food3 from "../../assests/food3.jpg";
import food4 from "../../assests/food4.jpg";
import food5 from "../../assests/food5.jpg";

import "./styles.scss";
const BottomSection = ({
  list = [
    { image: food1 },
    { image: food2 },
    { image: food3 },
    { image: food4 },
    { image: food5 },
  ],
}) => {
  return (
    <div className="fbBottomSection">
      {list.map((item, index) => (
        <BottomSectionImage key={index} {...item} />
      ))}
    </div>
  );
};

export default BottomSection;
