import React from "react";
import styles from "./Events.module.css";

import treknflowhero from "../../assets/treknflow.jpg";

export default function Events() {
  return (
    <>
      <div>
        <img
          src={treknflowhero}
          alt="Yoga class in mountains"
          className={`${styles.HeroImage} w-full object-cover bg-cover bg-no-repeat bg-fixed`}
        />
      </div>
    </>
  );
}
