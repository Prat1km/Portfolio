import React from 'react';
import './App.css';

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#contact">Contact</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {/* Scrollspy sections */}
      <div data-bs-spy="scroll" data-bs-target="#navbarSupportedContent" data-bs-offset="50" tabIndex="0" className="scrollspy-content">
        
        {/* Home Section */}
        <section id="home" className="d-flex justify-content-center align-items-center" style={{ padding: '100px 0', height: '100vh', textAlign: 'center' }}>
          <div className="card p-5 shadow" style={{ width: '50%', backgroundColor: '#f8f9fa' }}>
            <h1>Pratik Mishra</h1>
            <p>Software Developer | Java, Spring Boot, Angular</p>
            <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-4">
            <a href="#about" className="btn btn-outline-dark">Download Resume</a>
            </div>
            <div className="col-lg-3">
            <a href="#about" className="btn btn-outline-dark">Learn More</a>
            </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="d-flex justify-content-center align-items-center" style={{ padding: '100px 0', height: '100vh' }}>
          <div className="card p-5 shadow" style={{ width: '50%', backgroundColor: '#f8f9fa' }}>
            <h2>About Me</h2>
            <p>
              I am a developer with over 2 years of professional work experience in developing and deploying end-to-end,
              production-ready scalable microservices. I have proficiency in both frontend & backend 
              technologies, databases, as well as brief hands-on experience with Linux servers. 
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="d-flex justify-content-center align-items-center" style={{ padding: '100px 0', height: '100vh' }}>
          <div className="card p-5 shadow" style={{ width: '50%', backgroundColor: '#f8f9fa' }}>
            <h2>Skills</h2>
            <ul>
              <li>Languages: Java, JavaScript, Typescript, HTML5, CSS, SQL</li>
              <li>Frameworks & Libraries: SpringBoot, Angular, React.js, Node.js</li>
              <li>Technologies: RESTful APIs, Microservices, Git, JMeter</li>
              <li>Databases: MySQL, PostgreSQL, Oracle DB</li>
              <li>Cloud & DevOps: AWS, Linux servers, Shell scripting</li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="d-flex justify-content-center align-items-center" style={{ padding: '100px 0', height: '100vh' }}>
          <div className="card p-5 shadow" style={{ width: '50%', backgroundColor: '#f8f9fa' }}>
            <h2>Projects Section</h2>
            <p>Details of my projects.</p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="d-flex justify-content-center align-items-center" style={{ padding: '100px 0', height: '100vh' }}>
          <div className="card p-5 shadow" style={{ width: '50%', backgroundColor: '#f8f9fa' }}>
            <h2>Experience</h2>
            <div>
              <h3>Associate Systems Analyst | NSEIT</h3>
              <p>June 2023 – Present</p>
              <ul>
                <li>Developed microservices for CCIL and Clearcorp, improving system performance by 50%.</li>
                <li>Created Spring Boot APIs and responsive data visualizations using Chart.js.</li>
              </ul>
            </div>
            <div>
              <h3>Associate Systems Analyst - Trainee | NSEIT</h3>
              <p>Nov 2022 – May 2023</p>
              <ul>
                <li>Led the migration of NSE IFSC websites, ensuring data integrity and minimal downtime.</li>
                <li>Streamlined web content management using Node.js, React.js, and Drupal.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="d-flex justify-content-center align-items-center" style={{ padding: '100px 0', height: '100vh', textAlign: 'center' }}>
          <div className="card p-5 shadow" style={{ width: '50%', backgroundColor: '#f8f9fa' }}>
            <h2>Contact Me</h2>
            <p>Email: pratikmishra2807@gmail.com</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/pratik-mishraa/">Pratik Mishra</a></p>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#000', color: '#fff', padding: '20px 0', textAlign: 'center', marginTop: 'auto' }}>
        <div className="container">
          <p>&copy; 2024 Pratik Mishra. All Rights Reserved.</p>
          <div className="d-flex justify-content-center">
            <a href="mailto:pratikmishra2807@gmail.com" style={{ color: '#fff', marginRight: '15px' }}>Email</a>
            <a href="https://www.linkedin.com/in/pratik-mishraa/" style={{ color: '#fff', marginRight: '15px' }}>LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
