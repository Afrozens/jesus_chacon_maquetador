import React from "react";
import styles from "./CardSlider.module.css";

const index = () => {
  return (
    <div className={styles.card}>
      <img
        src="../src/assets/slider/imgOne.svg"
        alt="image of multiples brushes"
      />
      <h5>albumName</h5>
      <h6>Publicado: asdas</h6>
    </div>
  );
};

export default index;
