import React from "react";
import "./appbutton.scss";

const AppButton = ({ background = "#0371e3", text, onClick }) => {
  return (
    <button className="appbtn" style={{ background }} onClick={onClick}>
      {text}
    </button>
  );
};

export default AppButton;
