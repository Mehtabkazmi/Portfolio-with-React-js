import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["React.js with Firebase", "MERN Stack","React Native", "PHP Developer","Wordpress Customization"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/image.jpg" alt="" />
        </div> 
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Syed Mehtab Kazmi</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3><br />
          <p>A graduated interested to work on energizing problems and make use of skills for developing the latest software solutions.</p>
        </div>
        <a href="#portfolio">
          <img className="arrow" src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
