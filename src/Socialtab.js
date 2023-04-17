import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faGithub  
} from "@fortawesome/free-brands-svg-icons";


function SocialTab() {

  return (
    <div className="social-container">
      <section >
        <a
          target="_blank"  rel="noopener noreferrer" href="https://www.facebook.com/vembarasan.nagarajan"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x"/>
        </a>
        <a
          target="_blank"  rel="noopener noreferrer" href="https://www.linkedin.com/in/vembarasan-nagarajan-he-him-09797b37/"
          className="linkedin social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x"/>
        </a>
        <a
          target="_blank"  rel="noopener noreferrer" href="https://github.com/vembarasugn"
          className="github social"
        >
          <FontAwesomeIcon icon={faGithub} size="2x"/>
        </a>
        <a target="_blank"  rel="noopener noreferrer" href="https://twitter.com/vembarasan25" 
           className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x"/>
        </a> 
      </section>
    </div>
  );
}

export default SocialTab; 

