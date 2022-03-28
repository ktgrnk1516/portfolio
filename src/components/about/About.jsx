import React from "react";
import "./about.css";
import PC from "../../img/IMG_6939.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={PC} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <div className="a-title">
          <h1>About Me</h1>
        </div>
        <p className="a-sub">
          1996年、愛知県生まれ。 京都の大学卒業後、東京のIT企業勤務。
        </p>
        <p className="a-desc">
          趣味はデジタル・フィルムカメラを持って散歩をすることです。
          2021年12月から独学でモダンなフロントエンド開発ができるエンジニアを目指し
          日々勉強中です。
        </p>
        <div className="a-award">
          {/* <img src="" alt="" className="a-award-img" /> */}
          {/* <i className="bx bxs-heart"></i> */}

          <div className="a-award-texts">
            <h4 className="a-award-title">技術スタック</h4>
            <p className="a-award-desc">
              HTML/CSS・SCSS/JavaScript/React・Redux/Material-UI/Next.js/Firebase/Graph
              QL/Graph QL CMS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
