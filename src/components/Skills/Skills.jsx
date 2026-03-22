import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>

      {/* Languages */}
      <div className="skill-section">
        <h3>Languages</h3>
        <div className="skills-container">
          <div className="skill-card">
            <img src="/java.png" alt="Java" />
            <p>Java</p>
          </div>
          <div className="skill-card">
            <img src="/python.png" alt="Python" />
            <p>Python</p>
          </div>
          <div className="skill-card">
            <img src="/javascript.png" alt="JavaScript" />
            <p>JavaScript</p>
          </div>
        </div>
      </div>

      {/* Frontend */}
      <div className="skill-section">
        <h3>Frontend</h3>
        <div className="skills-container">
          <div className="skill-card">
            <img src="/react.png" alt="React" />
            <p>React.js</p>
          </div>
          <div className="skill-card">
            <img src="/html.png" alt="HTML" />
            <p>HTML5</p>
          </div>
          <div className="skill-card">
            <img src="/css.png" alt="CSS" />
            <p>CSS3</p>
          </div>
          <div className="skill-card">
            <img src="/bootstrap.png" alt="Bootstrap" />
            <p>Bootstrap</p>
          </div>
        </div>
      </div>

      {/* Backend */}
      <div className="skill-section">
        <h3>Backend</h3>
        <div className="skills-container">
          <div className="skill-card">
            <img src="/spring.png" alt="Spring Boot" />
            <p>Spring Boot</p>
          </div>
          <div className="skill-card">
            <img src="/flask.png" alt="Flask" />
            <p>Flask</p>
          </div>
        </div>
      </div>

      {/* Database */}
      <div className="skill-section">
        <h3>Database</h3>
        <div className="skills-container">
          <div className="skill-card">
            <img src="/mysql.png" alt="MySQL" />
            <p>MySQL</p>
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="skill-section">
        <h3>Tools</h3>
        <div className="skills-container">
          <div className="skill-card">
            <img src="/git.png" alt="Git" />
            <p>Git</p>
          </div>
          <div className="skill-card">
            <img src="/postman.png" alt="Postman" />
            <p>Postman</p>
          </div>
          <div className="skill-card">
            <img src="/vscode.png" alt="VS Code" />
            <p>VS Code</p>
          </div>
        </div>
      </div>

    </section>
  );
}