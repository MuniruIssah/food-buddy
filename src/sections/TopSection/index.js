import React from "react";
import FoodForm from "../../components/FoodForm";
import Notice from "../../components/Notice";
import RadioButtons from "../../components/RadioButtons";
import Header from "./subSections/Header";
import "./styles.scss";
const TopSection = () => {
  return (
    <div className="fbTopSection">
      <Header />
      <div className="leftColumn">
        <span className="largeHeading">
          Introducing <br />
          Your FoodBuddy
        </span>
        <span className="description">
          Within few clicks, find meals that are accessible near <br /> you
        </span>
        <FoodForm />
        <RadioButtons />
        <Notice />
      </div>
      <div className="rightColumn"></div>
    </div>
  );
};

export default TopSection;
