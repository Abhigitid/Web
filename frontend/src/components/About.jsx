import React from "react";
import Avtar from "../assets/Images/avtar.png";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-comp grid grid-two-cols">
          <div className="founder">
            <div className="founder-img">
              <figure>
                <img src={Avtar} alt="avtar" width={"50%"} />
              </figure>
            </div>
            <div className="founder-details">
              <h1 className="sub-heading">Founder</h1>
              <button className="btn">
                <a href="/founderProfile" style={{ color: "#faf0dc" }}>
                  Profile
                </a>
              </button>
            </div>
          </div>
          <div className="comp-details">
            <h1 className="sub-heading">Who we are?</h1>
            <p>
              We are a strong and worthy competitor in the field of web
              development. We work together with a client as a team. This allows
              us to identify customer needs and offer the best solution. A team
              of diverse specialists works on each project. Interaction with the
              client is carried out at all stages of the project.
            </p>
          </div>
        </div>
        <div className="about-story">
          <h1 className="main-heading">Our Story</h1>
          <p>
            Hey there stranger, welcome! My name is Abhishek, and I’m the
            founder of Web_Dev Website. 4 years ago I built my first website, it
            was a website for a startup I was excited about. 10 years later,
            that startup is dead. But I did get something out of it – a true
            passion for web design. In the years that passed, I got asked by
            many friends and family to help them with their website. And guess
            what, a few months later I got approached by more and more people. I
            was making a living as a freelance web designer in the upcoming
            years. And it was great! I’ve made fifty of websites throughout
            these years, honestly, I lost track at some point. Throughout this
            journey, I was always looking for inspiration. It’s just something
            that gets me started. Every time I built a website for a client, I
            looked for inspiration online. If I was building a website for a
            dentist, I wanted to have a quick look at how other dentists
            designed their website. But searching for good-looking web design
            took me hours and hours. Then it hit me. I probably wasn’t the only
            one that needed some good web design inspiration. That’s why I
            started Web_Dev Website. This website is made for web designers and
            learners who want to build a new website or improve their current
            one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
