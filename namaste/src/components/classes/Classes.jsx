import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import BeachYoga from "../../assets/beachyoga.jpg";
import ContactImage from "../../assets/contactimage.jpeg";
import styles from "./Classes.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Classes = () => {
  const classes = [
    {
      day: "Monday",
      location: "Elviria Beach",
      time: "9:00 AM - 10 AM",
      link: "https://www.google.com/maps/place/Yoga+with+Se%C3%A1na/@36.4916521,-4.7894722,16.53z/data=!4m10!1m2!2m1!1sUrbanizaci%C3%B3n+Coto+de+los+Dolores,+C.+Carril+del+Relojero,+29604+Marbella,+M%C3%A1laga!3m6!1s0xd73215f7389c159:0x71d83c42d91a4e5!8m2!3d36.4919162!4d-4.7833011!15sClJVcmJhbml6YWNpw7NuIENvdG8gZGUgbG9zIERvbG9yZXMsIEMuIENhcnJpbCBkZWwgUmVsb2plcm8sIDI5NjA0IE1hcmJlbGxhLCBNw6FsYWdhkgEPeW9nYV9pbnN0cnVjdG9y4AEA!16s%2Fg%2F11k430mgfn?entry=ttu",
    },
    {
      day: "Tuesday",
      location: "Elviria Beach",
      time: "9:00 AM - 10 AM",
      link: "https://www.google.com/maps/place/Yoga+with+Se%C3%A1na/@36.4916521,-4.7894722,16.53z/data=!4m10!1m2!2m1!1sUrbanizaci%C3%B3n+Coto+de+los+Dolores,+C.+Carril+del+Relojero,+29604+Marbella,+M%C3%A1laga!3m6!1s0xd73215f7389c159:0x71d83c42d91a4e5!8m2!3d36.4919162!4d-4.7833011!15sClJVcmJhbml6YWNpw7NuIENvdG8gZGUgbG9zIERvbG9yZXMsIEMuIENhcnJpbCBkZWwgUmVsb2plcm8sIDI5NjA0IE1hcmJlbGxhLCBNw6FsYWdhkgEPeW9nYV9pbnN0cnVjdG9y4AEA!16s%2Fg%2F11k430mgfn?entry=ttu",
    },
    {
      day: "Wednesday",
      location: "Elviria Beach",
      time: "9:00 AM - 10 AM",
      link: "https://www.google.com/maps/place/Yoga+with+Se%C3%A1na/@36.4916521,-4.7894722,16.53z/data=!4m10!1m2!2m1!1sUrbanizaci%C3%B3n+Coto+de+los+Dolores,+C.+Carril+del+Relojero,+29604+Marbella,+M%C3%A1laga!3m6!1s0xd73215f7389c159:0x71d83c42d91a4e5!8m2!3d36.4919162!4d-4.7833011!15sClJVcmJhbml6YWNpw7NuIENvdG8gZGUgbG9zIERvbG9yZXMsIEMuIENhcnJpbCBkZWwgUmVsb2plcm8sIDI5NjA0IE1hcmJlbGxhLCBNw6FsYWdhkgEPeW9nYV9pbnN0cnVjdG9y4AEA!16s%2Fg%2F11k430mgfn?entry=ttu",
    },
    {
      day: "Wednesday",
      location: "La Zambra",
      time: "7:00PM - 8 PM",
      link: "https://www.google.com/maps/place/Yoga+with+Se%C3%A1na/@36.4916521,-4.7894722,16.53z/data=!4m10!1m2!2m1!1sUrbanizaci%C3%B3n+Coto+de+los+Dolores,+C.+Carril+del+Relojero,+29604+Marbella,+M%C3%A1laga!3m6!1s0xd73215f7389c159:0x71d83c42d91a4e5!8m2!3d36.4919162!4d-4.7833011!15sClJVcmJhbml6YWNpw7NuIENvdG8gZGUgbG9zIERvbG9yZXMsIEMuIENhcnJpbCBkZWwgUmVsb2plcm8sIDI5NjA0IE1hcmJlbGxhLCBNw6FsYWdhkgEPeW9nYV9pbnN0cnVjdG9y4AEA!16s%2Fg%2F11k430mgfn?entry=ttu",
    },
    {
      day: "Friday",
      location: "Elviria Beach",
      time: "8:00 PM - 9:30 PM",
      link: "https://www.google.com/maps/place/Yoga+with+Se%C3%A1na/@36.4916521,-4.7894722,16.53z/data=!4m10!1m2!2m1!1sUrbanizaci%C3%B3n+Coto+de+los+Dolores,+C.+Carril+del+Relojero,+29604+Marbella,+M%C3%A1laga!3m6!1s0xd73215f7389c159:0x71d83c42d91a4e5!8m2!3d36.4919162!4d-4.7833011!15sClJVcmJhbml6YWNpw7NuIENvdG8gZGUgbG9zIERvbG9yZXMsIEMuIENhcnJpbCBkZWwgUmVsb2plcm8sIDI5NjA0IE1hcmJlbGxhLCBNw6FsYWdhkgEPeW9nYV9pbnN0cnVjdG9y4AEA!16s%2Fg%2F11k430mgfn?entry=ttu",
    },
    {
      day: "Saturday",
      location: "Elviria Beach",
      time: "8:00 PM - 9:30 PM",
      link: "https://www.google.com/maps/place/Yoga+with+Se%C3%A1na/@36.4916521,-4.7894722,16.53z/data=!4m10!1m2!2m1!1sUrbanizaci%C3%B3n+Coto+de+los+Dolores,+C.+Carril+del+Relojero,+29604+Marbella,+M%C3%A1laga!3m6!1s0xd73215f7389c159:0x71d83c42d91a4e5!8m2!3d36.4919162!4d-4.7833011!15sClJVcmJhbml6YWNpw7NuIENvdG8gZGUgbG9zIERvbG9yZXMsIEMuIENhcnJpbCBkZWwgUmVsb2plcm8sIDI5NjA0IE1hcmJlbGxhLCBNw6FsYWdhkgEPeW9nYV9pbnN0cnVjdG9y4AEA!16s%2Fg%2F11k430mgfn?entry=ttu",
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
      <div data-aos="zoom-out">
        <div className="relative">
          <img
            src={BeachYoga}
            alt="Yoga Classes Background"
            className="w-full h-screen object-cover bg-gradient-to-b from-black via-transparent to-transparent"
          />
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center mt-20"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="3000"
        >
          <div className="justify-center bg-opacity-80 p-8 rounded-lg">
            <h1 className="text-4xl text-white font-semibold mb-4">
              Yoga Classes
            </h1>
            <div className="bg-gray-200 bg-opacity-80 p-4 rounded-lg shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {classes.map((cls, index) => (
                  <div key={index} className="mb-4 flex flex-col">
                    <h2 className="text-xl text-center border-b border-gray-400 font-semibold">
                      {cls.day}
                    </h2>
                    <p className="text-gray-600">
                      <span className="font-semibold">Location:</span>{" "}
                      <a href={cls.link} className="text-black hover:underline">
                        {cls.location}
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className="ml-2 bg-transparent"
                        />
                      </a>
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
      </div>

      {/* Contact section */}
      <div className={styles.CardBackground}>
        <div className="bg-white-300c bg-opacity-80 p-8 rounded-lg relative">
          <div
            className={`${styles.Contact} border border-gray-400 rounded-lg overflow-hidden`}
            data-aos="fade-zoom-out"
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
      </div>
    </>
  );
};

export default Classes;
