import { Container, Nav, Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "../assets/img/logo.svg";
import linkedin from "../assets/icon/linkedin.svg";
import benhance from "../assets/icon/behance.svg";
import instagram from "../assets/icon/instagram.svg";
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {
  const [activeLink, setActivieLink] = useState("home");
  const [scrolled, setScolled] = useState(false);

  useEffect(() => {
    const onScoll = () => {
      if (window.scrollY > 50) {
        setScolled(true);
      } else {
        setScolled(false);
      }
    };

    window.addEventListener("scroll", onScoll);
    return () => window.removeEventListener("scroll", onScoll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActivieLink(value);
  };
  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={linkedin} alt="" />
              </a>
              <a href="#">
                <img src={benhance} alt="" />
              </a>
              <a href="#">
                <img src={instagram} alt="" />
              </a>
            </div>
            <button className="vvd">
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
