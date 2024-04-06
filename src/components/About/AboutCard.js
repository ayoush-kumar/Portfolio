import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ayoush Kumar, </span>
            from <span className="purple">Chandigarh, India.</span>
            <br />
            <br />
            I have been working on upskilling myself as a <span className="purple">web developer.</span> I love to explore new technologies and
            problem solving. My tech stack is mainly focusing on MERN which is <span className="purple">MongoDB, Express, React.js and Node.js.</span>
            
            <br />
            <br/>
            I am a final year student at<span className="purple"> Punjab Engineering College, Chandigarh, India.</span>
            <br />
            <br />
            Apart from coding, I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          “The road to success and the road to failure are almost exactly the same.” {" "}
          </p>
          <footer className="blockquote-footer">Colin R. Davis</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
