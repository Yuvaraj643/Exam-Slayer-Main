import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./style.css"
const Footer = () => {
  return (

    <footer className="footer mt-auto py-3 bg-light">
      <div className="container text-center">
        <span className="text-muted">ExamSlayer &copy; 2023</span>
        <div className="social-media mt-3">
          <a href="https://www.facebook.com/profile.php?id=100090442474189" target="_blank" rel="noopener noreferrer" className="me-3">
            <FontAwesomeIcon icon={faFacebook} className="fs-3" />
          </a>
          <a href="https://instagram.com/examslayer2023?igshid=YmMyMTA2M2Y" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="fs-3" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
