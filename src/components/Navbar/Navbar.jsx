import "./Navbar.css";
import { FaHome, FaUser, FaGraduationCap, FaProjectDiagram, FaTools, FaFileAlt, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Akash R</h2>

      <ul>
        <li><a href="#home"><FaHome /> Home</a></li>
        <li><a href="#about"><FaUser /> About</a></li>
        <li><a href="#education"><FaGraduationCap /> Education</a></li>
        <li><a href="#projects"><FaProjectDiagram /> Projects</a></li>
        <li><a href="#skills"><FaTools /> Skills</a></li>
        <li><a href="#resume"><FaFileAlt /> Resume</a></li>
        <li><a href="#contact"><FaEnvelope /> Contact</a></li>
      </ul>
    </nav>
  );
}