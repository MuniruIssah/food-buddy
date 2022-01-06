import React from "react";
import BottomSection from "../../sections/BottomSection";
import TopSection from "../../sections/TopSection";
import "./styles.scss";
const Homepage = () => {
  return (
    <div className="fbHomepage">
      <TopSection />
      <BottomSection />
    </div>
  );
};

export default Homepage;
