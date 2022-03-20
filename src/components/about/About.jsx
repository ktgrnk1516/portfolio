import React from "react";
import "./about.css";
import Camera from "../../img/Camera.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Camera} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <div className="a-title">
          <h1>About Me</h1>
        </div>
        <p className="a-sub">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
          doloribus.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis,
          libero aspernatur, maiores et error sit ex odit consequatur nobis
          deleniti nulla sunt doloremque beatae animi voluptate quia
          consectetur, numquam ab quod distinctio itaque. Neque omnis velit
          maxime reprehenderit quia in.
        </p>
        <div className="a-award">
          {/* <img src="" alt="" className="a-award-img" /> */}
          <i className="bx bxs-heart"></i>

          <div className="a-award-texts">
            <h4 className="a-award-title">Lorem ipsum dolor sit amet.</h4>
            <p className="a-award-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate, rerum hic! Sit laborum voluptates reprehenderit?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
