import React, { useEffect } from "react";
import AOS from "aos";

import styles from "./Events.module.css";

import treknflowhero from "../../assets/treknflow/treknflow.jpg";
import treknflow2 from "../../assets/treknflow/trekndflow2.jpg";
import treknflow3 from "../../assets/treknflow/trekndflow3.jpg";
import treknflow4 from "../../assets/treknflow/trekndflow4.jpg";
import treknflow5 from "../../assets/treknflow/trekndflow5.jpg";
import treknflow6 from "../../assets/treknflow/trekndflow6.jpg";
import treknflow7 from "../../assets/treknflow/trekndflow7.jpg";
import treknflow8 from "../../assets/treknflow/trekndflow8.jpg";
import treknflow9 from "../../assets/treknflow/trekndflow9.jpg";
import treknflow10 from "../../assets/treknflow/trekndflow10.jpg";
import treknflow11 from "../../assets/treknflow/trekndflow11.jpg";
import treknflow12 from "../../assets/treknflow/trekndflow12.jpg";
import treknflow13 from "../../assets/treknflow/trekndflow13.jpg";

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
      <div className={`relative`} data-aos="zoom-out">
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
            <p className="text-lg content-center mb-4" data-aos="fade-left">
              "there is wisdom in climbing mountains, for they teach us how
              truly small we are" -- Jeff Wheeler
            </p>
            <p className="text-lg content-center" data-aos="fade-left">
              Immerse yourself in the beauty of nature and discover inner peace
              through our unique blend of yoga and trekking experiences. At our
              yoga trekking events, we invite you to embark on a journey of
              self-discovery amidst some of the most breathtaking landscapes in
              Andalucia. Join us in reconnecting with nature, rejuvenate your
              spirit, and discover the inner peace that lies within.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className={`text-center mt-5 text-4xl`}>Title</h1>
        <h2 className={`text-center text-4xl mb-4`}>. . .</h2>
        <p className={`text-xl text-center`}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>

        <h2 className={`text-center text-4xl my-5`}>Photo Gallery</h2>
        <div
          class={`grid grid-cols-2 md:grid-cols-4 gap-4 ${styles.ImageMargin}`}
        >
          <div class="grid gap-3">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={treknflow2}
                alt=""
                data-aos="zoom-in"
                data-aos-anchor-placement="center-center"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={treknflow3}
                alt=""
                data-aos="zoom-in"
                data-aos-anchor-placement="center-center"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={treknflow4}
                alt=""
                data-aos="zoom-in"
                data-aos-anchor-placement="center-center"
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={treknflow5}
                alt=""
                data-aos="zoom-in"
                data-aos-anchor-placement="center-center"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={treknflow6}
                alt=""
                data-aos="zoom-in"
                data-aos-anchor-placement="center-center"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={treknflow7}
                alt=""
                data-aos="zoom-in"
                data-aos-anchor-placement="center-center"
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={treknflow8}
                alt=""
                data-aos="zoom-in"
                data-aos-anchor-placement="center-center"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={treknflow9}
                alt=""
                data-aos="zoom-in"
                data-aos-anchor-placement="center-center"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={treknflow10}
                alt=""
                data-aos="zoom-in"
                data-aos-anchor-placement="center-center"
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={treknflow11}
                alt=""
                data-aos="zoom-in"
                data-aos-anchor-placement="center-center"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={treknflow12}
                alt=""
                data-aos="zoom-in"
                data-aos-anchor-placement="center-center"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={treknflow13}
                alt=""
                data-aos="zoom-in"
                data-aos-anchor-placement="center-center"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
