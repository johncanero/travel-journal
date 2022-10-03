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
        <div className="flex justify-center mt-12 text-violet-600 md:mx-44 lg:mx-512">
          <Link href="https://github.com/johncanero" passHref>
            <a target="_blank" rel="noopener noreferrer"> 
              <FontAwesomeIcon icon={faGithub} className="w-6 mx-6 md:mx-12 lg:mx-16"></FontAwesomeIcon>
            </a>
          </Link>

          <Link href="https://twitter.com/johncaneroo" passHref>
            <a target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faTwitter} className="w-6 mx-6 md:mx-12 lg:mx-16"></FontAwesomeIcon>   
            </a>
          </Link>

          
          <Link href="https://www.linkedin.com/in/johncanero/" passHref>
            <a target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon FontAwesomeIcon icon={faLinkedin} className="w-6 mx-6 md:mx-12 lg:mx-16"></FontAwesomeIcon>
            </a>
          </Link>

          
          <Link href="https://www.youtube.com/channel/UCc5-wuapiL6SGf1eTpiWEkg" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} className="w-6 mx-6 md:mx-12 lg:mx-16"></FontAwesomeIcon>
            </a>
          </Link>

        </div>
      {/* Footer */}
      <footer className=" bg-cyanColor text-center font-Poppins font-light lg:text-left mt-8">
        <div className="text-gray-700 text-center p-4">
          © 2022 Copyright:
          <Link href="https://www.linkedin.com/in/johncanero/" passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 font-medium px-1"
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
