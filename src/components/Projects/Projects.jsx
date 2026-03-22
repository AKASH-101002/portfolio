import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="project-container">

        {/* Project 1 */}
        <div className="project-box">
          <div
            className="project-card"
            style={{ backgroundImage: "url('/rumor.png')" }}
          >
            <div className="overlay">
              <p>
                Full-stack AI system using React.js, Spring Boot, Flask, and MySQL 
                to detect and minimize misinformation using ML and graph algorithms.
              </p>
              <div className="links">
                <a
                  href="https://github.com/AKASH-101002"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="/"
                  onClick={(e) => e.preventDefault()}
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <h3 className="project-title">Rumor Blocking System</h3>
        </div>

        {/* Project 2 */}
        <div className="project-box">
          <div
            className="project-card"
            style={{ backgroundImage: "url('/cloud.jpg')" }}
          >
            <div className="overlay">
              <p>
                Secure cloud sharing system using Python and encryption techniques 
                with dynamic key management and access control.
              </p>
              <div className="links">
                <a
                  href="https://github.com/AKASH-101002"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="/"
                  onClick={(e) => e.preventDefault()}
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <h3 className="project-title">Privacy-Preserving Cloud Sharing</h3>
        </div>

        {/* Project 3 */}
        <div className="project-box">
          <div
            className="project-card"
            style={{ backgroundImage: "url('/portfolio.jpg')" }}
          >
            <div className="overlay">
              <p>
                Responsive portfolio built with React.js and Tailwind CSS 
                to showcase skills and projects.
              </p>
              <div className="links">
                <a
                  href="https://github.com/AKASH-101002"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="/"
                  onClick={(e) => e.preventDefault()}
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <h3 className="project-title">Personal Portfolio Website</h3>
        </div>

      </div>
    </section>
  );
}