import React from "react";
import YogaHero from "../../assets/yogahero.jpeg";


const Home = () => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <img
        src={YogaHero}
        alt="Yoga Hero"
        className="w-full h-screen object-cover"
      />

      {/* Intro Message */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="max-w-xl mx-auto text-white p-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to Yoga Bliss</h1>
          <p className="text-lg">
            Discover the path to inner peace and harmony through yoga. Join our
            classes and start your journey to a healthier and more balanced
            life.
          </p>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-semibold py-2 px-4 mt-4 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
