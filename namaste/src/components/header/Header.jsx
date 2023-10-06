import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.navbar}>
      <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">
          <h2>Yoga with Seána</h2>
        </a>
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
