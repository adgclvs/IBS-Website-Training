import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <p>
          ® 2022 Indigo Blockchain School, une école du groupe{" "}
          <a href="https://www.diderot-education.fr/" target="_blank">
            Diderot Education
          </a>
          . 13 rue de la Fontaine au Roi, 75011, Paris, France.
        </p>
      </div>
      <div className="right">
        <ul>
          <li>
            <a href="https://www.youtube.com/@DiderotEducation" target="_blank">
              <FontAwesomeIcon icon={faYoutube} style={{ color: "#ffffff" }} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/IndigoBlockchainSchool/" target="_blank">
              <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff" }} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/indigo_blockchain_school/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff" }} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/indigo-blockchain-school/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff" }} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
