import React, { useEffect, useRef } from "react";
import { init } from 'ityped';
import "./Intro.scss";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2000,
      backSpeed: 60,

      strings: [
        "Java Web Developer",
        "React Web Developer",
        "Angular Web Developer",
      ],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="https://ThanhNhanDang.github.io/Portfolio-Website/assets/man.png" alt="" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Dang Thanh Nhan</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="https://ThanhNhanDang.github.io/Portfolio-Website/assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
