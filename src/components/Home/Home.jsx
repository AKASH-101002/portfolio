import "./Home.css";
import profileImg from "./profile.jpeg";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-container">

        {/* Left Content */}
        <div className="home-content">
          <h1>
            Hi, I'm <span>Akash R</span>
          </h1>

          <h2>Software Developer</h2>

          <p className="summary">
            Enthusiastic Software Developer with hands-on experience in building 
            scalable and responsive web applications using React.js, Java, Python, 
            and MySQL.
            <br />
            <strong>Tech Stack:</strong> React.js | Spring Boot | Python | MySQL | JavaScript
          </p>

          {/* Buttons */}
          <div className="buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>

            <a href="/resume.pdf" className="btn secondary" download>
              Download Resume
            </a>
          </div>

          {/* Social Icons 🔥 */}
          <div className="social-icons">
            <a
              href="https://github.com/AKASH-101002"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/akash-r-9a4512283"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/919566560336"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="home-image">
          <img src={profileImg} alt="Akash R" />
        </div>

      </div>
    </section>
  );
}