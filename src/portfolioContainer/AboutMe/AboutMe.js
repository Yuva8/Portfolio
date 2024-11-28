import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
// import Animations from "../../utilities/Animation";
import "./aboutMe.css";

function AboutMe(props) {
  // let fadeInScreenHandler = (screen) => {
  //   if (screen.fadeInScreen !== props.id) return;
  //   Animations.animations.fadeInScreen(props.id);
  // };
  // const fadeInSubscription =
  //   ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description: `Results-oriented Frontend Developer with 3 years of professional experience in designing and developing scalable, user-friendly web applications using React, Angular, HTML, CSS, and JavaScript. Expertise in integrating third-party APIs, improving UI/UX design, and creating responsive, SEO- optimized solutions. Proven track record in delivering projects for fintech, corporate websites, and marketing campaigns.`,
    highlights: {
      bullets: [
        "React js and Angular",
        "Javascript(ES6+) and Typescript",
        "Bootstrap / Material-UI / Tailwind css",
        "Managing Database(SQL,Mongo Db)",
        "API Integration ( IDFY,Score me)",
        "React Redux",
        "node js, Express",
      ],
      heading: "Here are a Few Highlights:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };
  return (
    <div className="about-me-container screen-container " id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                Hire Me
              </button>
              <a
                href="https://drive.google.com/file/d/1VM6auRlg-pIPqSp6b8HlDk2Rbtf-bB-e/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
