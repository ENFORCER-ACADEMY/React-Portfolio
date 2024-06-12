import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="text-info">Prosper Chitewe </span>
            from <span className="text-warning"> Harare, Zimbabwe.</span>
            <br />I am going to start my Univesity Journey in August at Bindura
            Univesity studying{" "}
            <span className="text-info">
              <strong>Software Engineering</strong>.
            </span>
            <br />I have completed My A Level studies at Harare High School And
            that is when i got{" "}
            <span className="text-warning">
              <strong>Passionate About Coding and my journey began</strong>
            </span>
            <br />
            <br />
            Apart from coding, Here are some activities that love doing!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Weight Lifting
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Football
            </li>
          </ul>

          <p className="text-danger">
            "Striving to learn new skills everyday!"{" "}
          </p>
          <footer className="blockquote-footer text-danger">Prosper</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
