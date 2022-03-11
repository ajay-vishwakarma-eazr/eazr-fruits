import React from "react";
import Lottie from "react-lottie";
import loader from "../Loader/loading.json";
const Loader = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie options={options} height="45%" width="45%" speed={1} />
    </>
  );
};

export default Loader;
