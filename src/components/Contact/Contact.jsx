import "./Contact.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <h2>Contact Me</h2>

        <p className="contact-text">
          Feel free to reach out for opportunities, collaborations, or any queries.
        </p>

        <div className="contact-row">

          {/* Email (Box - not button) */}
          <div className="contact-email">
            <MdEmail className="icon" />
            <span>akashravichandran210@gmail.com</span>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919566560336"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaWhatsapp className="icon" />
            <span>WhatsApp</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/akash-r-9a4512283"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaLinkedin className="icon" />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/AKASH-101002"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaGithub className="icon" />
            <span>GitHub</span>
          </a>

        </div>

      </div>
    </section>
  );
}