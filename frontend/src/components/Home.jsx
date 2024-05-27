import React, { useRef } from "react";
import homeImg from "../assets/Images/HomImg.svg";
import CodeImg from "../assets/Images/code.svg";
import { animate, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaUserSecret,
} from "react-icons/fa";
import { MdMoreTime } from "react-icons/md";
import { GrProjects } from "react-icons/gr";

const Home = () => {
  const yearCount = useRef(null);
  const projectCount = useRef(null);
  const clientCount = useRef(null);

  const animationYearCount = () => {
    animate(0, 5, {
      duration: 1,
      onUpdate: (value) => (yearCount.current.textContent = value.toFixed(0)),
    });
  };
  const animationClientsCount = () => {
    animate(0, 28, {
      duration: 1,
      onUpdate: (value) => (clientCount.current.textContent = value.toFixed(0)),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 158, {
      duration: 1,
      onUpdate: (value) =>
        (projectCount.current.textContent = value.toFixed(0)),
    });
  };

  return (
    <section className="home">
      <div className="container">
        <div className="hero-section  grid grid-two-cols">
          <div className="home-content">
            <h1 className="sub-heading">
              Hi, <span>There!</span>
            </h1>
            <h1 className="main-heading">
              <strong>We offer custom web app development services</strong>
            </h1>
            <p>
              We design and build industry-leading web-based products that bring
              value to your customers, delivered with compelling UX.
            </p>

            <div className="typewriter">
              <Typewriter
                options={{
                  strings: [
                    "Designing",
                    "Web App Development",
                    "Networking",
                    "Learning",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>
            <Link to="/projects">
              <button className="btn">Projects</button>
            </Link>
            <Link to="/about">
              <button className="btn secondary-btn">Know More</button>
            </Link>
          </div>
          <div className="home-image">
            <figure>
              <img src={homeImg} alt="home-img" width="80%" height={"auto"} />
            </figure>
          </div>
        </div>
        <div className="hero-clients">
          <div className="clients grid grid-three-cols">
            <div className="success-years">
              <icon className="main-heading">
                <MdMoreTime />
              </icon>
              <h1 className="main-heading count">
                <strong>
                  +
                  <motion.span
                    ref={yearCount}
                    whileInView={animationYearCount}
                  ></motion.span>
                </strong>
              </h1>
              <h1 className="sub-heading count-desc">Successful Years</h1>
            </div>

            <div className="projects-done">
              <icon className="main-heading">
                <GrProjects />
              </icon>
              <h1 className="main-heading count">
                <strong>
                  +
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  ></motion.span>
                </strong>
              </h1>
              <h1 className="sub-heading count-desc">Projects Done</h1>
            </div>

            <div className="review">
              <icon className="main-heading">
                <FaUserSecret />
              </icon>
              <h1 className="main-heading count">
                <strong>
                  +
                  <motion.span
                    ref={clientCount}
                    whileInView={animationClientsCount}
                  ></motion.span>
                </strong>
              </h1>
              <h1 className="sub-heading count-desc">Clients</h1>
            </div>
          </div>
        </div>

        <div className="hero-social-section">
          <div className="social-connect">
            <h1 className="main-heading">Connect With Us</h1>
            <div className="social-link grid grid-two-cols">
              <div className="social-icons">
                <div className="icons">
                  <div className="icon">
                    <FaFacebook />
                  </div>
                  <div className="icon">
                    <FaInstagram />
                  </div>
                  <div className="icon">
                    <FaYoutube />
                  </div>
                  <div className="icon">
                    <FaLinkedin />
                  </div>
                </div>
                <div className="contact-btn">
                  <button className="btn">Contact Us</button>
                </div>
              </div>
              <div className="social-img">
                <figure>
                  <img src={CodeImg} alt="codeimg" width={"100%"} />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
