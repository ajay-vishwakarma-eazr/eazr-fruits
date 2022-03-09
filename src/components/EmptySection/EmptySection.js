import React from "react";
import empty from "../../assets/images/box.png";
import "./empty.scss";
import Lottie from "react-lottie";
import lottie from "lottie-web";
import animationLoader from "../../assets/static/nodata.json";

// lottie.loadAnimation({
//   container: document.querySelector("#no-data"),
//   animationData: Nodata,
//   renderer: "svg", // "canvas", "html"
//   loop: true, // boolean
//   autoplay: true, // boolean
// });

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationLoader: animationLoader,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
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

      {/* <div>
        <h1>Lottie</h1>
        <p>Base animation free from external manipulation</p>
        <Lottie options={defaultOptions} height={400} width={400}  />
      </div> */}
      </div>
  );
};

export default EmptySection;
