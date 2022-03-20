//google font
//https://bennettfeely.com/clippy/

//24:34

import React from "react";
import "./intro.css";
import Me from "../../img/Me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is </h2>
          <h1 className="i-name">ktgrnk</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">PhotoGrapher</div>
              <div className="i-title-item">〇〇</div>
              <div className="i-title-item">〇〇</div>
              <div className="i-title-item">〇〇</div>
            </div>
          </div>
          <p className="i-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            quia veritatis quos exercitationem porro praesentium.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;

//8:49
