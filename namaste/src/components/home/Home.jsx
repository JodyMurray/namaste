import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import YogaHero from "../../assets/yogahero.jpeg";
import YogaPose from "../../assets/yogapose.jpeg";
import YogaPose2 from "../../assets/yogapose2.jpeg";
import styles from "./Home.module.css";
import Footer from "../footer/Footer";

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
      <div className={`${styles.Hero} relative`} data-aos="zoom-out">
        <img
          src={YogaHero}
          alt="Yoga Hero"
          className={`${styles.HeroImage} w-full object-cover bg-cover bg-no-repeat bg-fixed`}
        />

        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black to-transparent">
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
            <a href="/classes">
              <button
                className="bg-purple-500 hover:bg-purple-700 text-white font-semibold py-2 px-4 mt-4 rounded-full"
                data-aos="flip-up"
              >
                Classes
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="relative">
        <img
          src={YogaPose}
          alt="Yoga Pose"
          className={`${styles.YogaPose} w-full h-screen object-cover bg-cover bg-no-repeat bg-fixed`}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black to-transparent">
          <div className="max-w-xl mx-auto text-white p-8">
            <h2 className="text-4xl font-bold mb-4" data-aos="fade-left">
              Explore the outbacks of Spain
            </h2>
            <p className="text-lg" data-aos="fade-right">
              Discover Andalusia's beauty through exhilarating
              hikes, followed by serene yoga and snacks for a rejuvenating
              experience.
            </p>
            <a href="/trek-n-flow">
              <button
                className="bg-purple-500 hover:bg-purple-700 text-white font-semibold py-2 px-4 mt-4 rounded-full"
                data-aos="flip-up"
              >
                Trek 'n Flow events
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
