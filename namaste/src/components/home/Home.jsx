import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import YogaHero from "../../assets/yogahero.jpeg";
import YogaPose from "../../assets/yogapose.jpeg";
import YogaPose2 from "../../assets/yogapose2.jpeg";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 100,
      easing: "ease",
    });
  }, []);
  return (
    <>
      <div className="relative">
        <img
          src={YogaHero}
          alt="Yoga Hero"
          className="w-full h-screen object-cover bg-cover bg-no-repeat bg-fixed"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="max-w-xl mx-auto text-white p-8">
            <h1 className="text-4xl font-bold mb-4" data-aos="fade-right">
              Welcome to Yoga with Seána
            </h1>
            <p className="text-lg" data-aos="fade-left">
              Meet Seána, your dedicated Irish yoga teacher, guiding you through
              the tranquil practice of Hatha Vinyasa on the sun-kissed shores of
              Marbella. Discover the serenity of yoga by the beach as Seána
              offers private yoga classes and specializes in nurturing expectant
              mothers through soothing maternity yoga sessions. Embrace the
              harmonious blend of nature, wellness, and mindfulness in each
              session with Seána.
            </p>
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white font-semibold py-2 px-4 mt-4 rounded-full"
              data-aos="flip-up"
            >
              More Info
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <img
          src={YogaPose}
          alt="Yoga Pose"
          className="w-full h-screen object-cover bg-cover bg-no-repeat bg-fixed"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="max-w-xl mx-auto text-white p-8">
            <h2 className="text-4xl font-bold mb-4" data-aos="fade-right">
              Explore the Serenity
            </h2>
            <p className="text-lg" data-aos="fade-left">
              Immerse yourself in the tranquil world of yoga and experience
              inner peace like never before. Join us in this journey of wellness
              and mindfulness.
            </p>
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white font-semibold py-2 px-4 mt-4 rounded-full"
              data-aos="flip-up"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
