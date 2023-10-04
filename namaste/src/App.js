import React from "react";
import "./index.css";

function App() {
  const header = (
    <nav className="p-4 navbar">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">
        </a>
        <ul className="flex space-x-5 nav-links">
          <li>
            <a href="/" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/classes" className="text-white">
              Classes
            </a>
          </li>
          <li>
            <a href="/trek-n-flow" className="text-white">
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
