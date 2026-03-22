import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2>My Education</h2>

        <div className="edu-card">
          <h3>Master of Computer Applications (MCA)</h3>
          <p>Mohamed Sathak Engineering College, Kilakarai</p>
          <p className="score">CGPA: 8.54</p>
          <span>2023 - 2025</span>
        </div>

        <div className="edu-card">
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <p>Madurai Kamaraj University College, Madurai</p>
          <p className="score">CGPA: 7.27</p>
          <span>2020 - 2023</span>
        </div>

        <div className="edu-card">
          <h3>Higher Secondary (HSC)</h3>
          <p>A.V. Higher Secondary School, Paramakudi</p>
          <p className="score">Percentage: 58%</p>
          <span>2019 - 2020</span>
        </div>

        <div className="edu-card">
          <h3>SSLC (10th)</h3>
          <p>Don Bosco Matric Higher Secondary School, Paramakudi</p>
          <p className="score">Percentage: 72%</p>
          <span>2017 - 2018</span>
        </div>
      </div>
    </section>
  );
}