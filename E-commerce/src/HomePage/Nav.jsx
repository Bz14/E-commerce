import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/nav.module.css";

const Navigation = () => {
  return (
    <Navbar expand="lg" className={styles.navContainer}>
      <Container>
        <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={styles.navLink}>
              Home
            </Nav.Link>
            <Nav.Link href="#home" className={styles.navLink}>
              Products
            </Nav.Link>
            <Nav.Link href="#home" className={styles.navLink}>
              Login
            </Nav.Link>
            <Nav.Link href="#home" className={styles.navLink}>
              Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
