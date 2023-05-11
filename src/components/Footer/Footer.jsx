import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./style.css"
const Footer = () => {
  return (
    <footer>
      <div className="rounded-social-buttons">
        <a className="social-button facebook" href="https://www.facebook.com/profile.php?id=100090442474189" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
        {/* <a className="social-button twitter" href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a> */}
        {/* <a className="social-button linkedin" href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin"></i></a> */}
        {/* <a className="social-button youtube" href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></a> */}
        <a className="social-button instagram" href="https://www.instagram.com/examslayer2023/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
