import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
// import ScrollService from "../../utilities/ScrollService";
// import Animations from "../../utilities/Animation";
import "./Resume.css";

function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  // let fadeInScreenHandler = (screen) => {
  //   if (screen.fadeInScreen !== props.id) return;
  //   Animations.animations.fadeInScreen(props.id);
  // };
  // const fadeInSubscription =
  //   ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", className: "fa fa-graduation-cap" },
    { label: "Technical Skills", className: "fa fa-code" },
    { label: "Projects", className: "fa fa-bar-chart" },
    { label: "Interests", className: "fa fa-heart" },
  ];

  const TechnicalSkillDetails = [
    { skill: "Javascript", ratingPercentage: 75 },
    { skill: "React Js", ratingPercentage: 75 },
    { skill: "Express Js", ratingPercentage: 70 },
    { skill: "Node Js", ratingPercentage: 70 },
    { skill: "Mongo DB", ratingPercentage: 75 },
    { skill: "HTML", ratingPercentage: 75 },
    { skill: "CSS", ratingPercentage: 75 },
    { skill: "SQL", ratingPercentage: 75 },
  ];

  const projectDetails = [
    {
      title: "Video streaming App",
      duration: {},
      description:
        "A Video streaming application with video upload and stream features.",
      subHeading:
        "Technologies used: React JS, Bootstrap,Node js,Express JS,MongoDB",
    },
    {
      title: "Notes-App",

      duration: {},
      description:
        "Notes Taking Web application used to Create,Edit,Delete a note for personal use and we can able to View the notes after stored in Database.",
      subHeading:
        "Technologies used: React JS,Material UI,React-redux,Node JS,Express JS,MongoDB",
    },
    {
      title: "Memories-App",

      duration: {},
      description:
        "A web application where users can post a pic and share their memories with Others. also able to Edit and Delete the post Which has been Created by the same user.",
      subHeading:
        "Technologies used: React JS,Material UI,react-bootstrap,React-redux,Node JS,Express JS,MongoDB",
    },
    {
      title: "Shopping-Cart",
      duration: {},
      description:
        "Ecommerce app having features like admin side used to perform CURD operation for product model,payment integration done using strip,socket.io used to show notification in admin & user side,also some common features.",
      subHeading:
        "Technologies used: React JS,React-redux,Node JS,Express JS,MongoDB",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Full Stack Developer"}
        subHeading={"Guvi Geek PVT LTD"}
        fromDate={"dec(2021)"}
        toDate={"present"}
      />
      <ResumeHeading
        heading={"BACHELOR OF ENGG IN MECHANICAL"}
        subHeading={`Prince Dr.k Vasudevan college of Engineering and Technology,Chennai`}
        fromDate={"2013"}
        toDate={"2017"}
      />
      <ResumeHeading
        heading={"High School"}
        subHeading={"P.S Matric.Hr.Sec.School,Chennai "}
        fromDate={"2011"}
        toDate={"2013"}
      />
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {TechnicalSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          link={projectsDetails.link}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Learning New Skills"
        description="Apart from being a tech enthusiast and a code writer, i also love to Learn new skills and technologies."
      />
      <ResumeHeading
        heading="Sports"
        description="Watching or being responsible for Communicating and reconciling team disputes in zonal-level Cricket competition."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in cricket games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <i className={`${bullet.className}`}>
          {/* <img
          className="fa fa-graduation-cap"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt=""
        /> */}
          <span className="bullet-label">{bullet.label}</span>
        </i>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
