import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faGithub  
} from "@fortawesome/free-brands-svg-icons";
import { FcPhoneAndroid , FcViewDetails } from "react-icons/fc";
import { AiFillMail } from "react-icons/ai";
import Button from "@material-ui/core/Button";


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
          target="_blank"  rel="noopener noreferrer" href="https://www.linkedin.com/in/vembarasan-nagarajan-09797b37/"
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
        <a target="_blank"  rel="noopener noreferrer" href="https://twitter.com/home" 
           className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x"/>
        </a>

        <Button className="btnbottom social" href="mailto:vembarasugn@gmail.com" style={{backgroundColor: "#f3f3f3f1", color:"rgb(1, 1, 22)",justifyContent: "center"}} variant="outlined">
         <AiFillMail size="18px" style={{ minWidth: "32px" }}/>
         EMail Me 
        </Button>

        <Button className="btnbottom  social" href="tel:8098986851" style={{backgroundColor: "#f3f3f3f1", color:"rgb(1, 1, 22)",justifyContent: "center"}} variant="outlined">
         <FcPhoneAndroid size="19px" style={{ minWidth: "32px"}}/>
         Phone Call 
        </Button>

        <Button className="btnbottom  social" target="_blank" href="./Vembarasan N CV-updated.pdf" style={{backgroundColor: "#f3f3f3f1", color:"rgb(1, 1, 22)",justifyContent: "center"}} variant="outlined">
         <FcViewDetails size="18px" style={{ minWidth: "32px"}}/>
         Get My CV 
        </Button>

      </section>
    </div>
  );
}

export default SocialTab; 

