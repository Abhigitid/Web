import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slider1 from "../assets/Images/slider1.jpg";
import slider2 from "../assets/Images/slider2.jpg";
import slider3 from "../assets/Images/slider3.jpg";
import slider4 from "../assets/Images/slider4.jpg";
import slider5 from "../assets/Images/slider5.jpg";

const Projects = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <section className="projects">
      <div className="container">
        <div className="project-page">
          <h1 className="sub-heading">We completed many projects</h1>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="swiper"
          >
            <SwiperSlide>
              <img src={slider1} alt="" />
              <div className="content">
                <h1>Project 1</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <button className="btn">Visit</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider2} alt="" />
              <div className="content">
                <h1>Project 1</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <button className="btn">Visit</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider3} alt="" />
              <div className="content">
                <h1>Project 1</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <button className="btn">Visit</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider4} alt="" />
              <div className="content">
                <h1>Project 1</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <button className="btn">Visit</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider5} alt="" />
              <div className="content">
                <h1>Project 1</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <button className="btn">Visit</button>
              </div>
            </SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
