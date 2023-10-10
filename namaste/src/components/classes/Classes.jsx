import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import BeachYoga from "../../assets/beachyoga.jpg";
import ContactImage from "../../assets/contactimage.jpeg";
import styles from "./Classes.module.css";

const Classes = () => {
  const classes = [
    {
      day: "Monday",
      location: "Elviria Beach",
      time: "9:00 AM - 10 AM",
    },
    {
      day: "Tuesday",
      location: "Elviria Beach",
      time: "9:00 AM - 10 AM",
    },
    {
      day: "Wednesday",
      location: "Elviria Beach",
      time: "9:00 AM - 10 AM",
    },
    {
      day: "Wednesday",
      location: "La Zambra",
      time: "7:00PM - 8 PM",
    },
    {
      day: "Friday",
      location: "Elviria Beach",
      time: "8:00 PM - 9:30 PM",
    },
    {
      day: "Saturday",
      location: "Elviria Beach",
      time: "8:00 PM - 9:30 PM",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 100,
      easing: "ease",
    });
  }, []);

  return (
    <>
      <div className="relative" data-aos="zoom-out">
        <img
          src={BeachYoga}
          alt="Yoga Classes Background"
          className="w-full h-screen object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-8 rounded-lg">
          <h1 className="text-4xl font-semibold mb-4">Yoga Classes</h1>
          <div className="bg-gray-200 bg-opacity-80 p-4 rounded-lg shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {classes.map((cls, index) => (
                <div key={index} className="mb-4 flex flex-col">
                  <h2 className="text-xl text-center border-b border-gray-400 font-semibold">
                    {cls.day}
                  </h2>
                  <p className="text-gray-600">
                    <span className="font-semibold">Location:</span>{" "}
                    {cls.location}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Time:</span> {cls.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact section */}

      <div className="bg-white-300c bg-opacity-80 p-8 rounded-lg relative">
        <div
          className={`${styles.Contact} border border-gray-400 rounded-lg overflow-hidden`}
        >
          <div className="flex items-center">
            <div className="w-1/2 pr-8 m-10">
              <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions or inquiries, feel free to reach out
                to us.
              </p>
              <p className="text-gray-600">
                Email: example@email.com
                <br />
                Phone: (123) 456-7890
              </p>
            </div>
            <div className="w-1/2 p-5">
              <img
                src={ContactImage}
                alt="Contact Image"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Classes;
