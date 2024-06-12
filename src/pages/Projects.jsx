import Particle from "./Particle";
import { Container, Row, Col } from "react-bootstrap";
const Projects = () => {
  return (
    <Container>
      <div className="container vh-100 d-flex justify-content-center align-items-center project-section">
        <Particle />
        <h1 className="text-center text-danger "> COOMING SOON</h1>
      </div>
    </Container>
  );
};

export default Projects;
