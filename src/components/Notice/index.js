import React from "react";
import "./styles.scss";
import { GiClockwork, GiFrenchFries } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";

const Notice = ({
  list = [
    {
      notice: (
        <>
          delivery in all paris in less than 30
          <br /> minutes
        </>
      ),
      Icon: GiClockwork,
    },
    {
      notice: (
        <>
          Free delivery
          <br /> from 29 euros
        </>
      ),
      Icon: MdDeliveryDining,
    },
    { notice: "Only fresh and french products", Icon: GiFrenchFries },
  ],
}) => {
  return (
    <div className="notice">
      {list.map((item, index) => (
        <NoticeItem {...item} key={index} />
      ))}
    </div>
  );
};

export default Notice;

const NoticeItem = ({ notice, Icon }) => {
  return (
    <div className="noticeItem">
      <Icon style={{ fontSize: 30, color: "#37aee1" }} />
      <span>{notice}</span>
    </div>
  );
};
