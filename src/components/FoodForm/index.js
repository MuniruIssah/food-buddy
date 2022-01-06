import React from "react";
import './styles.scss'
const FoodForm = () => {
  return (
    <form className="foodform">
      <input type="text" placeholder="Enter your Address" />
      <button>Find Food</button>
    </form>
  );
};

export default FoodForm;
