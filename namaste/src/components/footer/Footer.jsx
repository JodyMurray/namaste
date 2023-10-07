import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPersonWalking } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.css";
import logo2 from "../../assets/logo2.png";

const Footer = () => {
  return (
    <footer
      className={`${styles.Footer} bg-gradient-to-b from-black via-gray-800 to-gray-700 h-40 w-full text-white p-4 relative`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <img src={logo2} alt="Logo" className="w-25 h-16 brightness-255" />
        <div className="mb-4">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} Projects by Keiron and Jody
          </p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/yogawithseana"
            className="text-white hover:text-gray-400"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <FontAwesomeIcon icon={faFacebookF} />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/yogawithseana/"
            className="text-white hover:text-gray-400"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <FontAwesomeIcon icon={faInstagram} />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/groups/286832625905876"
            className="text-white hover:text-gray-400"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <FontAwesomeIcon icon={faPersonWalking} />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
