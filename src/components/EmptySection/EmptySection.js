import React from "react";
// import empty from "../../assets/images/box.png";
import empty from "../../assets/images/nodata.png";
import "./empty.scss";
import Lottie from "react-lottie";
import lottie from "lottie-web";
import animationLoader from "../../assets/static/nodata.json";

// const defaultOptions = {
//   loop: true,
//   autoplay: true,
//   animationLoader: animationLoader,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice",
//   },
// };
const EmptySection = () => {
  return (
    <div className="empty-section">
      <img src={empty} alt="" />
      {/* <div> */}
      {/* <div id="no-data" style={{ width: 40, height: 450 }} /> */}
        {/* <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        /> */}

      {/* </div> */}
      </div>
  );
};

export default EmptySection;
