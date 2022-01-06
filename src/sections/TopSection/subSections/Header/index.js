import React from "react";
import "./styles.scss";
import { MdPersonOutline } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header">
      <span>food delivery</span>
      <div>
        <button>
          <MdPersonOutline />
          <span>Log in</span>
        </button>
        <button>
          <BsCart3 />
          <span>0</span>
        </button>
        <button>
          <AiOutlineMenu />
        </button>
      </div>
    </div>
  );
};

export default Header;
