import React, { useEffect } from "react";
import "./splash.css";
import splash from "../../assets/reducidas/readymp4.mp4";
import splashMobile from "../../assets/reducidas/readymp4mobile.mp4";

const Splash = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="product__video-container">
        <video src={splash} loop autoPlay muted />
      </div>
      <div className="product__video-container-mobile">
        <video src={splashMobile} loop autoPlay muted />
      </div>
    </>
  );
};

export default Splash;
