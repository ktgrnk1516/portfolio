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
          <h2 className="i-name">N.K's Portfolio</h2>
          <h2 className="i-intro">Skills</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">HTML/CSS/JS</div>
              <div className="i-title-item">React/Redux</div>
              <div className="i-title-item">Next.js/Vercel</div>
              <div className="i-title-item">Firebase</div>
              <div className="i-title-item">Graph QL</div>
            </div>
          </div>
          {/* <h3 className="i-intro">About Me</h3> */}
          <div className="i-desc-wrapper">
          <p className="i-desc">はじめまして。フロントエンドエンジニアのN.Kです。個人開発したWebアプリケーションの紹介をするサイトです。</p>
          </div>
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
