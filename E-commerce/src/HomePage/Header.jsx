import Img from "./Image";
import img1 from "../assets/images/img1.jpg";
import styles from "../styles/header.module.css";
import { Container, Row, Col } from "react-bootstrap/esm";

const Header = () => {
  return (
    <Container fluid="sm" className="mt-4">
      <Row>
        <Col className={styles.headerImg}>
          <Img url={img1} alt="This is image" />;
        </Col>
        <Col className={styles.headerTxt}>
          <h1>Hello</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
