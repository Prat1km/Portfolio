import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Navbar, Nav, ProgressBar, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);  // Set default to true for dark mode

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Navigation */}
      <Navbar bg={isDarkMode ? 'dark' : 'light'} variant={isDarkMode ? 'dark' : 'light'} expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Pratik Mishra</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="/resume.pdf" download="Pratik Mishra.pdf">Resume</Nav.Link>

            </Nav>
            <div className="theme-switch-wrapper">
              <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
                <div className="slider round"></div>
              </label>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Home Section */}
      <section id="home" className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h1>Hi, I'm Pratik 👋 </h1>
              <p className="lead">
                I'm a Developer specializing in Full Stack Development.
                With a passion for Java and JavaScript, I create scalable end to end applications that help facilitate business growth.
              </p>
            </Col>
            <Col md={4} className="text-center">
              <div className="profile-image-container">
                <Image src="/pfp.jpg" fluid className="profile-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="zigzag-section left-align py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2>About Me</h2>
            </Col>
            <Col md={6}>
              <p>I am a dedicated and enthusiastic developer with a strong foundation in computer science and a passion for creating innovative solutions.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills Section */}
      <section id="skills" className="zigzag-section right-align py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2>Skills</h2>
            </Col>
            <Col md={6}>
              <Skills />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="zigzag-section left-align py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2>Projects</h2>
            </Col>
            <Col md={6}>
              <p>Details about my projects...</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Experience Section */}
      <section id="experience" className="zigzag-section right-align py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2>Experience</h2>
            </Col>
            <Col md={6}>
              <p>Work experience details...</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="zigzag-section left-align py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2>Contact Me</h2>
            </Col>
            <Col md={6}>
              <p>Contact details...</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-4">
        <Container>
          <p>&copy; 2024 Pratik Mishra. All Rights Reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

function SkillBar({ skill, proficiency }) {
  return (
    <div className="skill-bar mb-3">
      <div className="d-flex justify-content-between mb-1">
        <span>{skill}</span>
        <span>{proficiency}%</span>
      </div>
      <ProgressBar now={proficiency} variant="info" />
    </div>
  );
}

function Skills() {
  const skills = [
    { name: "JavaScript", proficiency: 90 },
    { name: "React", proficiency: 85 },
    { name: "Node.js", proficiency: 80 },
    { name: "Python", proficiency: 75 },
    { name: "SQL", proficiency: 70 },
    // Add more skills as needed
  ];

  return (
    <section id="skills">
      <Container>
        <h2 className="text-center mb-5">Skills</h2>
        <Row>
          <Col md={6}>
            {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => (
              <SkillBar key={index} skill={skill.name} proficiency={skill.proficiency} />
            ))}
          </Col>
          <Col md={6}>
            {skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => (
              <SkillBar key={index} skill={skill.name} proficiency={skill.proficiency} />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default App;
