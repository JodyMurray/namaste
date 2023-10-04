import React from "react";
import "./index.css";


function App() {
  const header = (
    <nav className="bg-blue-500 p-4 navbar">
      <div className="container">
        <a href="/" className="text-white text-2xl font-bold">
          Yoga with Seána
        </a>
        <ul className="flex space-x-4 nav-links">
          <li>
            <a href="/" className="text-white hover:text-blue-300">
              Home
            </a>
          </li>
          <li>
            <a href="/classes" className="text-white hover:text-blue-300">
              Classes
            </a>
          </li>
          <li>
            <a href="/trek-n-flow" className="text-white hover:text-blue-300">
              Trek 'n Flow
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );

  return (
    <>
      {header}
      <h1>Homepage</h1>
    </>
  );
}

export default App;
