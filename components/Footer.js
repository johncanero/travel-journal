import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <div>
        <div className="flex mx-16 mt-12 text-violet-700 md:mx-44 lg:mx-512">
          <FontAwesomeIcon icon={faGithub} className="flex mx-auto w-6"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faTwitter} className="flex mx-auto w-6"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faLinkedin} className="flex mx-auto w-6"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faYoutube} className="flex mx-auto w-6"></FontAwesomeIcon>
        </div>
      {/* Footer */}
      <footer className=" bg-cyanColor text-center font-Poppins font-light lg:text-left mt-6">
        <div className="text-gray-700 text-center p-4">
          © 2022 Copyright:
          <Link href="https://www.linkedin.com/in/johncanero/" passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 font-semibold px-1"
            >
              John Cañero
            </a>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
