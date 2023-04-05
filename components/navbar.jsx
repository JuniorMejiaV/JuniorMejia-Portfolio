import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Link from "next/link";

function navBar() {
    return(
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href='/'>Junior Mejia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" href="/">
                Home
              </Link>
              <Link className="nav-link" href="/experience">
                Experience
              </Link>
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default navBar;