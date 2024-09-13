import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeIcon from "../../Assets/homeicons.svg";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { ThemeContext } from "../../Context/theme";

import logoLight from "../../Assets/logoLight.png";
import logoDark from "../../Assets/logoDark.png";

import { Link, useNavigate } from "react-router-dom";
import myImg from "../../Assets/Avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import laptopImg from "../../Assets/about.png";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import ProjectCards from "../Projects/ProjectCards";

import HRM from "../../Assets/Projects/HRM.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Homentor from "../../Assets/Projects/Homentor.png";
import ExpenseTracker from "../../Assets/Projects/ExpenseTracker.png";
import Type from "./Type";
import { IoIosCall } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { PiReadCvLogo } from "react-icons/pi";
import resume from '../../Assets/Vinay_Resume.pdf'

// import Toolstack from "./Toolstack";

function Home() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [{ themename, toggeltheme }] = useContext(ThemeContext);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  useEffect(() => {
    const body = document.body;
    const toggle = document.querySelector(".toggle-inner");
    if (themename === "dark") {
      body.classList.add("dark-mode");
      toggle.classList.add("toggle-active");
    } else {
      body.classList.remove("dark-mode");
      toggle.classList.remove("toggle-active");
    }
  }, [themename]);

  window.addEventListener("scroll", scrollHandler);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getResume = () => {
    try {
      const pdfUrl = resume; 
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Vinay_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Failed to download resume:", error);
    }
  };
  return (
    <section>
      {/* ----------------------------------------Header------------------------------------------ */}
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <img
              src={themename === "light" ? logoDark : logoLight}
              className="img-fluid logo"
              alt="brand"
              style={{ width: "48", height: "40" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <div className="toggleButton">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item onClick={() => scrollToSection("home")}>
                <Nav.Link as={Link} onClick={() => updateExpanded(false)}>
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item onClick={() => scrollToSection("about")}>
                <Nav.Link as={Link} onClick={() => updateExpanded(false)}>
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item onClick={() => scrollToSection("skills")}>
                <Nav.Link as={Link}>Skills</Nav.Link>
              </Nav.Item>
              <Nav.Item onClick={() => scrollToSection("projects")}>
                <Nav.Link as={Link} onClick={() => updateExpanded(false)}>
                  Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item onClick={() => scrollToSection("contact")}>
                <Nav.Link rel="noreferrer">Contact</Nav.Link>
              </Nav.Item>
            </Nav>

            <Nav.Item>
              <div className="theme-switch">
                <div id="toggle" onClick={toggeltheme}>
                  <div className="toggle-inner" />
                </div>
              </div>
            </Nav.Item>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* ----------------------------------------Header close------------------------------------------ */}

      {/* ----------------------------------------Home------------------------------------------ */}

      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>{" "}
                I'M
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> Vinay Yadav</strong>
              </h1>

              <div style={{ padding: 30 }} className="type">
                <Type />
              </div>
              <div
                style={{
                  padding: 30,
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  flexWrap: "wrap",
                }}
              >
                <Button
                  variant="primary"
                  href="https://github.com/vinayadav008"
                  target="_blank"
                  style={{
                    marginLeft: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AiFillGithub /> &nbsp;
                  {"Github"}
                </Button>

                <Button
                  onClick={() => getResume()}
                  variant="primary"
                  // href={props.demoLink}
                  style={{
                    marginLeft: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <PiReadCvLogo /> &nbsp;
                  {"Download CV"}
                </Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeIcon}
                alt="home pic"
                className="img-fluid"
                style={{ paddingTop: 50 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* ----------------------------------------Home Close------------------------------------------ */}

      {/* ----------------------------------------About Me------------------------------------------ */}
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
                <span className="primary-header"> ABOUT </span> ME
              </h1>
              <p className="home-about-body" data-aos="fade-up">
                I'm Vinay Yadav,{" "}
                <i className="primary-header">
                  a passionate and Self-Taught MERN / React Native Developer
                </i>{" "}
                with 1+ year of exprience who loves solving problems and
                building Websites and Application. I am passionate about{" "}
                <i className="primary-header">technologies</i> and love to learn
                new things.
              </p>
              <div className="d-flex flex-wrap flex-lg-nowrap gap-5 mt-5">
                <div className="exprience w-lg-50">
                  <div className="d-flex gap-3 align-items-center ">
                    <span className="fs-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 50 50"
                      >
                        <g
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        >
                          <path
                            stroke="currentColor"
                            d="m29.27 35.625l4.063 8.125l4.125-4.23l6.292.063l-5.854-11.625v-.02M20.73 35.625l-4.063 8.125l-4.125-4.23l-6.292.063l5.854-11.625v-.02"
                          />
                          <path
                            stroke="currentColor"
                            d="M40.167 20.833c0 1.584-1.396 2.917-1.855 4.334c-.458 1.416-.145 3.354-1.041 4.583s-2.813 1.5-3.938 2.417s-2.083 2.625-3.541 3.104c-1.459.479-3.105-.438-4.688-.438s-3.27.896-4.687.438c-1.417-.459-2.313-2.23-3.542-3.104c-1.23-.875-3.146-1.188-4.042-2.417c-.896-1.23-.562-3.125-1.041-4.583c-.48-1.459-1.959-2.75-1.959-4.334s1.396-2.916 1.854-4.333s.146-3.354 1.042-4.583s2.813-1.5 4.042-2.417s1.979-2.625 3.541-3.104c1.563-.48 3.105.437 4.688.437s3.27-.896 4.688-.437C31.104 6.854 32 8.625 33.333 9.5s3.146 1.187 4.042 2.417s.563 3.125 1.042 4.583s1.75 2.75 1.75 4.333M25 14.583a6.25 6.25 0 1 0 0 12.501a6.25 6.25 0 0 0 0-12.5"
                          />
                        </g>
                      </svg>
                    </span>
                    <div>
                      <p className="m-0 text-start fw-bold">Exprience</p>
                      <p className="m-0 text-start fw-bold">
                        1+ Year exprience
                      </p>
                    </div>
                  </div>
                  <p className="m-0 text-start mt-2 p-2">
                    <i>
                      As a MERN Stack developer and React Native Developer.At
                      Mssquareindia indore (M. P.)
                    </i>
                  </p>
                </div>
                <div className="exprience w-lg-50">
                  <div className="d-flex align-items-start align-items-center gap-3">
                    <span className="fs-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 2048 2048"
                      >
                        <path
                          fill="currentColor"
                          d="M1582 1065q41 72 61 150t21 161v103l-640 321l-640-321q0-60 1-112t9-101t24-98t48-103L256 960v587q29 10 52 28t41 42t26 52t9 59v320H0v-320q0-30 9-58t26-53t40-42t53-28V896L0 832l1024-512l1024 512zM256 1728q0-26-19-45t-45-19t-45 19t-19 45v192h128zm30-896l738 369l738-369l-738-369zm1250 568q0-77-15-143t-53-135l-444 222l-444-222q-33 58-50 122t-18 132v24l512 256z"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="m-0 text-start fw-bold">Education</p>
                      <p className="m-0 text-start fw-bold">BCA</p>
                    </div>
                  </div>
                  <p className="m-0 text-start mt-2 p-2">
                    <i>
                      Bachelors of Computer Science. Renaissance University
                      indore (M. P.).
                    </i>
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img
                  style={{ borderRadius: "50%" }}
                  data-aos="fade-left"
                  src={myImg}
                  className="img-fluid"
                  alt="avatar"
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* ----------------------------------------About Me Close------------------------------------------ */}
      {/* ----------------------------------------About ------------------------------------------ */}
      <Container fluid className="about-section" id="skills">
        <Container>
          <h1 data-aos="fade-right">
            <span className="primary-header">Skillset</span> I Work With
          </h1>

          <div data-aos="fade-up">
            <Techstack />
          </div>

          {/* <h1 data-aos="fade-right">
            <span className="primary-header">Tools</span> I use
          </h1>
          <div data-aos="fade-up">
            <Toolstack data-aos="fade-up" />
          </div> */}

          {/* <Github /> */}
        </Container>
      </Container>
      {/* ----------------------------------------About Close------------------------------------------ */}
      {/* ----------------------------------------Projects------------------------------------------ */}
      <Container fluid className="project-section" id="projects">
        <Container>
          <div style={{ padding: 20 }}></div>
          <h1 className="project-heading">
            My Recent <strong className="Fluorescent-Blue">Works </strong>
          </h1>
          <p>Here are a few projects I've worked on recently.</p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={6} lg={4} className="project-card">
              <ProjectCards
                imgPath={Portfolio}
                title="Portfolio Website"
                description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
                // ghLink="https://github.com/vinayadav008/Portfolio-Website"
                demoLink="https://vinayadav-portfolio.netlify.app/"
              />
            </Col>
            <Col md={6} lg={4} className="project-card">
              <ProjectCards
                imgPath={Homentor}
                title="Homentor"
                description="This is a fully functional learning website and application where you can find tutor for you  that uses React.js + Bootstrap and CSS in the front end and NodeJs and express js in backend and MongoDb as Database.Have features which allows user for realtime messaging."
                // ghLink="https://github.com/vinayadav008/E-cart"
                demoLink="https://Homentor.in/"
              />
            </Col>

            <Col md={6} lg={4} className="project-card">
              <ProjectCards
                imgPath={HRM}
                title="HRM"
                description="A Personal software to record your employes, attendance, income, expenses, clients and many more resources build with React.js + Bootstrap and CSS in the front end and NodeJs and express js in backend and MongoDb as Database. "
                // ghLink="#"
                demoLink="https://hrm.mssquareindia.com/"
              />
            </Col>

            {/* <Col md={6} lg={4} className="project-card">
              <ProjectCards
                imgPath={ExpenseTracker}
                title="Expense Tracker"
                description="An online expense tracker using React, Node, Express, and MongoDB as the database. It allows you to keep track of your expenses, investments, and savings. All past transactions are listed, and you can also delete them. "
                ghLink="https://github.com/vinayadav008/Expense-Tracker"
                demoLink="https://expense-tracker.rahuljha4171.vercel.app/"
              />
            </Col>

            <Col md={6} lg={4} className="project-card">
              <ProjectCards
                imgPath={ExpenseTracker}
                title="Expense Tracker"
                description="An online expense tracker using React, Node, Express, and MongoDB as the database. It allows you to keep track of your expenses, investments, and savings. All past transactions are listed, and you can also delete them. "
                ghLink="https://github.com/vinayadav008/Expense-Tracker"
                demoLink="https://expense-tracker.rahuljha4171.vercel.app/"
              />
            </Col>

            <Col md={6} lg={4} className="project-card">
              <ProjectCards
                imgPath={ExpenseTracker}
                title="Expense Tracker"
                description="An online expense tracker using React, Node, Express, and MongoDB as the database. It allows you to keep track of your expenses, investments, and savings. All past transactions are listed, and you can also delete them. "
                ghLink="https://github.com/vinayadav008/Expense-Tracker"
                demoLink="https://expense-tracker.rahuljha4171.vercel.app/"
              />
            </Col> */}
          </Row>
        </Container>
        <ScrollToTop />
      </Container>
      {/* ----------------------------------------Projects Close------------------------------------------ */}
      {/* ----------------------------------------Projects Close------------------------------------------ */}
      <div id="contact" style={{ paddingBottom: 200 }}>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>

            <div style={{ paddingTop: 20, paddingBottom: 20 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                }}
              >
                <a
                  href="mailto:vinayadav8462@gmail.com"
                  style={{ textDecoration: "none" }}
                >
                  <AiOutlineMail /> vinayadav8462@gmail.com
                </a>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                }}
              >
                <IoIosCall /> 7999331342
              </div>
            </div>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/vinayadav008"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:vinayadav8462@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vinayyadav08"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="whatsapp://send?text=hello&phone=7999331342"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="whatsapp"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ydvv.vinay?igsh=bXBkbHNnYzRvNzls"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <br />
            <br />
            <br />
            <br />
          </Col>
        </Row>
      </div>
      {/* ----------------------------------------Projects Close------------------------------------------ */}
      {/* ----------------------------------------Footer ------------------------------------------ */}
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright"></Col>
          <Col md="4" className="footer-copywright">
            <span>
              Designed and Developed by{" "}
              <i className="primary-header">Vinay Yadav</i>
            </span>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  style={{ color: `var(--clr-primary)` }}
                  className="github"
                  href="https://github.com/vinayadav008"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  style={{ color: `var(--clr-primary)` }}
                  className="email"
                  href="mailto:vinayadav8462@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  style={{ color: `var(--clr-primary)` }}
                  className="linkedin"
                  href="https://www.linkedin.com/in/vinayyadav08"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  style={{ color: `var(--clr-primary)` }}
                  className="whatsapp"
                  href="whatsapp://send?text=hello&phone=7999331342"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="whatsapp"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  style={{ color: `var(--clr-primary)` }}
                  className="instagram"
                  href="https://www.instagram.com/ydvv.vinay?igsh=bXBkbHNnYzRvNzls"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      {/* ----------------------------------------Footer Close ------------------------------------------ */}

      <ScrollToTop />
    </section>
  );
}

export default Home;
