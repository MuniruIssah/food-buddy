import React, { useEffect, useState } from "react";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import "./styles.scss";
const RadioButtons = ({
  list = [
    { value: "Delivery", Icon: RiMotorbikeFill },
    { value: "Pickup", Icon: FaShoppingBag },
  ],
}) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <div className="radioButtons">
      {list.map((item, index) => (
        <RadioButton key={index} {...item} current={value} onClick={setValue} />
      ))}
    </div>
  );
};

export default RadioButtons;

const RadioButton = ({ current, value, onClick, Icon }) => {
  const handleClick = () => onClick(value);
  return (
    <div
      className={`radioButton ${current === value ? "highlighted" : ""}`}
      onClick={handleClick}
    >
      <Icon style={{ fontSize: 13 }} />
      <span> {value}</span>
    </div>
  );
};
