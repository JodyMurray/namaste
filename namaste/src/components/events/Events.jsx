import React, { useEffect } from "react";
import AOS from "aos";

import styles from "./Events.module.css";

import treknflowhero from "../../assets/treknflow.jpg";

const yogaTrekkingEvents = [
  {
    id: 1,
    title: "Mountain Yoga Retreat",
    date: "2023-11-15",
    location: "Himalayas, India",
    description:
      "Join us for a week of yoga and trekking in the stunning Himalayan mountains. Disconnect from the hustle and bustle of daily life and find inner peace in nature.",
    imageUrl: "https://example.com/mountain-yoga-retreat.jpg",
  },
  {
    id: 2,
    title: "Jungle Yoga Adventure",
    date: "2023-12-10",
    location: "Amazon Rainforest, Brazil",
    description:
      "Immerse yourself in the heart of the Amazon rainforest as you practice yoga amidst the sounds of nature. Explore the jungle with experienced guides.",
    imageUrl: "https://example.com/jungle-yoga-adventure.jpg",
  },
  {
    id: 3,
    title: "Beach Yoga and Hiking",
    date: "2024-02-22",
    location: "Bali, Indonesia",
    description:
      "Combine the tranquility of beachfront yoga sessions with thrilling hikes through the lush landscapes of Bali. A perfect blend of relaxation and adventure.",
    imageUrl: "https://example.com/beach-yoga-hiking.jpg",
  },
];

export default function Events() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 100,
      easing: "ease",
    });
  }, []);

  return (
    <>
      <div className={`relative`}>
        <img
          src={treknflowhero}
          alt="Yoga class in mountains"
          className={`${styles.HeroImage} w-full object-cover bg-cover bg-no-repeat bg-fixed`}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black to-transparent">
          <div className="max-w-4xl mx-auto text-white p-8">
            <h1 className="text-4xl font-bold mb-4" data-aos="fade-right">
              Trek'N'Flow
            </h1>
            <p className="text-lg content-center" data-aos="fade-left">
              "there is wisdom in climbing mountains, for they teach us how truly
              small we are"
              -- Jeff Wheeler
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
