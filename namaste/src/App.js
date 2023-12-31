import React from "react";
import { Route, Routes } from "react-router-dom";

import "./index.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Events from "./components/events/Events";
import Footer from "./components/footer/Footer";
import Classes from "./components/classes/Classes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trek-n-flow" element={<Events />} />
        <Route path="/classes" element={<Classes />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
