import React from "react";
import Lottie from "react-lottie";
import nocredit from "../Loader/NoCredit.json";
const NoCredit = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: nocredit,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie
        options={options}
        height="25%"
        width="25%"
        speed={1}
        style={{ color: "red", textShadow: "2px 2px 4px #000000" }}
      />
    </>
  );
};

export default NoCredit;
