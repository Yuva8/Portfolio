import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
// import Particle from "./Particle";

import video from "../../assets/Projects/Video-App.png";
import notes from "../../assets/Projects/Notes-app.1.png";
import memories from "../../assets/Projects/Memories-App.1.png";
import shoppingcart from "../../assets/Projects/Shopping Cart.png";
import cinetrack from "../../assets/Projects/Cine-Track.png";

function Projects(props) {
  return (
    <div id={props.id || ""}>
      <Container fluid className="project-section">
        <ScreenHeading
          title={"Projects"}
          subHeading={"FullStack Projects with advanced Topics and APIs"}
        />
        {/* <Particle /> */}
        <Container fluid className="project-section">
          {/* <h1 className="project-heading" style={{ textAlign: "center" }}>
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "black", textAlign: "center" }}>
            Here are a few projects I've worked on recently.
          </p> */}
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={video}
                isBlog={false}
                title="Video streaming App"
                description="A Video streaming application with video upload and stream features, user authentication is done with help of JSON web token(JWT)."
                links="https://github.com/Yuva8/Videoapp-frontend"
                link="https://github.com/Yuva8/Videoapp-backend"
                view="https://effortless-pithivier-18410c.netlify.app/signIn"
                tech="ReactJS,Bootstrap,Nodejs,ExpressJS,MongoDB"
                id="yuvi@gmail.com"
                password="1234"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={notes}
                isBlog={false}
                title="Notes-App"
                description="Notes Taking Web application used to Create,Edit,Delete a note for personal use, state management is done with React-redux and User authentication is also done. "
                links="https://github.com/Yuva8/NotesApp-Frontend"
                link="https://github.com/Yuva8/NotesApp-Backend"
                view="https://roaring-faloodeh-ccdfde.netlify.app/"
                tech="ReactJs,MaterialUI,Reactredux,NodeJS,ExpressJS,MongoDB"
                id="yuvi@gmail.com"
                password="1234"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={memories}
                isBlog={false}
                title="Memories-App"
                description="A web application where users can post a pic and share their memories with Others also able to Edit and Delete the post Which has been Created by the same user."
                links="https://github.com/Yuva8/Memories-Frontend"
                link="https://github.com/Yuva8/Memories-Backend"
                view="https://incredible-paprenjak-e993fb.netlify.app/"
                tech="ReactJS,MaterialUI,Reactredux,NodeJS,ExpressJS,MongoDB"
                id="yuvi@gmail.com"
                password="1234"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={shoppingcart}
                isBlog={false}
                title="Shopping-Cart"
                description="This Application used to View Products in Database and also having features like add to cart,Viewing Single Product in Detail,also Product data is persist in local storage."
                links="https://github.com/Yuva8/Shopping_Cart_Frontend"
                link="https://github.com/Yuva8/Shopping_Cart_Backend"
                view="https://splendorous-brioche-9fe6e6.netlify.app/"
                tech="ReactJS,MaterialUI,Reactredux,NodeJS,ExpressJS,MongoDB"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={cinetrack}
                isBlog={false}
                title="Cine-Track"
                description="A web application where user can able to view the Movies and Web series details based on the geners and also able to find list of Trending movie, Search Feature is also there."
                links="https://github.com/Yuva8/CineTrack"
                view="https://coruscating-churros-b3fdc8.netlify.app/"
                tech="ReactJS,MaterialUI,Movies-Api"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Projects;
