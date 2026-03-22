import "./Resume.css";

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="resume-container">

        <h2>My Resume</h2>

        <p className="resume-text">
          Here is a detailed overview of my education, skills, projects, and experience 
          as a Software Developer.
        </p>

        {/* Resume Preview */}
        <div className="resume-preview">
          <iframe
            src="/AKASH_RESUME.pdf"
            title="Akash Resume"
            className="pdf-viewer"
          ></iframe>
        </div>

        {/* Buttons */}
        <div className="resume-buttons">
          <a
            href="/AKASH_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            View Resume
          </a>

          <a
            href="/AKASH_RESUME.pdf"
            download
            className="btn secondary"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}