import React from "react";
import AboutImg from "../assets/Images/aboutIMG.svg";
import { MdHtml, MdCss, MdJavascript } from "react-icons/md";
import { FaGit, FaJava, FaNode, FaReact, FaWindows } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import Typewriter from "typewriter-effect";

const FounderProfile = () => {
  return (
    <div className="founder">
      <div className="container">
        <div className="founderProfile grid grid-two-cols">
          <div className="about-image">
            <figure>
              <img src={AboutImg} alt="about-img" width={"100%"} />
            </figure>
          </div>
          <div className="about-content">
            <h1 className="sub-heading">
              Hi, <span>There!</span>
            </h1>
            <h1 className="main-heading">
              <strong>
                I'M <span style={{ color: "#5c6e58" }}> Abhishek Kumar</span>
              </strong>
            </h1>
            <p>
              A web developer with a passion for creating beautiful and
              functional websites. I have a strong foundation in HTML, CSS, and
              JavaScript, and I am always eager to learn new technologies and
              improve my skills.
            </p>
            <div className="typewriter">
              <Typewriter
                options={{
                  strings: ["A Full Stack Developer", "A Freelancer"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="about-skills">
          <h1 className="main-heading">Technology & Tools I Use</h1>
          <div className="box grid grid-cols">
            <div className="icon">
              <MdHtml />
            </div>

            <div className="icon">
              <MdCss />
            </div>

            <div className="icon">
              <MdJavascript />
            </div>

            <div className="icon">
              <FaNode />
            </div>

            <div className="icon">
              <FaReact />
            </div>

            <div className="icon">
              <FaGit />
            </div>

            <div className="icon">
              <FaJava />
            </div>

            <div className="icon">
              <FaWindows />
            </div>

            <div className="icon">
              <TbBrandVscode />
            </div>
          </div>
        </div>
        <div className="about-experience">
          <h1 className="main-heading">Experience</h1>
          <div className="experience grid grid-three-cols">
            <div className="exp-desc">
              <p>
                <span>3</span>
                <sup>
                  +<span>Years</span>
                </sup>
              </p>
            </div>
            <div className="exp-place1">
              <p>
                As a Tutor in <span> Navodaya Institute Varanasi</span>
              </p>
            </div>
            <div className="exp-place1">
              <p>
                Frontend Developer at <span> Web Solutions Pune</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderProfile;
