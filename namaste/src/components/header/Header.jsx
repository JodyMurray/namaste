import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header
      className={`${styles.navbar} absolute top-0 left-0 right-0 bg-black bg-opacity-50 z-10`}
    >
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-white text-2xl font-bold">
            <img src={logo} className={styles.logo} alt="logo" height="40" />
          </a>
          <h1 className={`${styles.Heading1} text-white text-xl font-bold`}>
            Yoga with Seána
          </h1>{" "}
          {/* Your heading */}
          <ul className="flex space-x-6">
            <li className={styles.NavLinks}>
              <a href="/" className="text-white">
                Home
              </a>
            </li>
            <li className={styles.NavLinks}>
              <a href="/classes" className="text-white">
                Classes
              </a>
            </li>
            <li className={styles.NavLinks}>
              <a href="/trek-n-flow" className="text-white">
                Trek 'n Flow
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
