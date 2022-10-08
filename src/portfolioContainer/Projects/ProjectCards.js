import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards(props) {
  return (
    <Card
      className="project-card-view"
      style={{
        backgroundColor: "#25263b",
        color: "white",
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "left" }}>{props.description}</Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {<span style={{ padding: "3px" }}>Tech_used:</span>}
          {props.tech}
        </Card.Text>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: "5px",
          }}
        >
          <Button
            style={{
              marginLeft: "3px",
            }}
            variant="info"
            href={props.links}
            target="_blank"
          >
            {props.isBlog ? "View Blog" : "Frontend"}
          </Button>
          {props.link ? (
            <Button
              style={{
                marginLeft: "4px",
              }}
              variant="info"
              href={props.link}
              target="_blank"
            >
              {props.isBlog ? "View Blog" : "Backend"}
            </Button>
          ) : (
            ""
          )}

          <Button
            style={{
              marginLeft: "4px",
            }}
            variant="info"
            href={props.view}
            target="_blank"
          >
            {props.isBlog ? "View Blog" : "Live"}
          </Button>
        </div>
        {props.id ? (
          <Card.Text
            style={{
              display: "flex",
              margin: "10px",
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            demo-id: {props.id}, password:
            {props.password}
          </Card.Text>
        ) : (
          ""
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
