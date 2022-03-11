import React from "react";
import Lottie from "react-lottie";
import nodata from "../Loader/nodata.json";
const Nodata = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: nodata,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie options={options} height="auto" width="40%" speed={1} />
    </>
  );
};

export default Nodata;
