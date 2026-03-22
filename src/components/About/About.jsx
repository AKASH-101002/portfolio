import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <h2>About Me</h2>

        <p className="about-summary">
          I'm <span>Akash R</span>, an enthusiastic Software Developer with hands-on 
          experience in building scalable and responsive web applications using 
          React.js, Spring Boot, Python, and MySQL.
        </p>

        <p>
          I completed my MCA with a strong academic record and gained practical 
          experience through a full stack internship, where I worked on frontend-backend 
          integration, REST APIs, and database operations.
        </p>

        <p>
          My key project focuses on minimizing the influence of misinformation in 
          social networks using machine learning, graph theory, and full stack technologies.
        </p>

        <div className="about-highlights">
          <div className="highlight-box">
            <h3>🎓 Education</h3>
            <p>MCA (CGPA: 8.54)</p>
          </div>

          <div className="highlight-box">
            <h3>💻 Experience</h3>
            <p>Full Stack Intern (3 Months)</p>
          </div>

          <div className="highlight-box">
            <h3>🚀 Projects</h3>
            <p>AI + Full Stack Applications</p>
          </div>
        </div>

      </div>
    </section>
  );
}