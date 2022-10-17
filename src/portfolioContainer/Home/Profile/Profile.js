import React from "react";
import "./profile.css";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://www.linkedin.com/in/yuvaraj-m-52604215b/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>

              <a
                href="https://github.com/Yuva8"
                target="_blank"
                rel="noreferrer"
              >
                <i style={{ marginLeft: "20px" }} className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hi, I'm <span className="highlighted-text">Yuvaraj</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 📈",
                    1500,
                    "Full Stack Developer 💻",
                    1500,
                    "MERN Stack Dev 💼",
                    1500,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Creative and enthusiastic to develop and learn new skills,
                technologies and experience
              </span>
              <br />
              <br />
              <span>
                <a
                  href="https://github.com/Yuva8"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "yellow", fontSize: "25px" }}
                >
                  👉🏻 GitHub 👈🏻{" "}
                </a>
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              class="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a
              href="https://drive.google.com/file/d/0B1xro_MYx6lka3ktYmhwTmZ4emFtVTNHcEh3aF9lcEpxdk80/view?usp=sharing&resourcekey=0-kSBjKjo2andjYXlt7o5sfA"
              target="_blank"
              rel="noreferrer"
            >
              <button class="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
