import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPersonWalking } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-purple-200 text-grays p-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-4">
          <p className="text-lg font-semibold">Yoga with Seána</p>
        </div>
        <div className="mb-4">
          <p className="text-sm">
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
