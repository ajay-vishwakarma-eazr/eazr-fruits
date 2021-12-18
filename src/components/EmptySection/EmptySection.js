import React from "react";
import empty from "../../assets/images/box.png";
import "./empty.scss";

const EmptySection = () => {
  return (
    <div className="empty-section">
      <img src={empty} alt="" />
    </div>
  );
};

export default EmptySection;
