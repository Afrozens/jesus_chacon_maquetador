import React from "react";
import styles from "./Parallax.module.css";

const Parallax = () => {
  return (
    <div className={styles.container}>
      <div>
        <img
          src="../src/assets/parallax/imgOne.svg"
          alt="image of multiples brushes"
        />
        <img
          src="../src/assets/parallax/imgTwo.svg"
          alt="image of multiples brushes"
        />
        <img
          src="../src/assets/parallax/imgNine.svg"
          alt="image of multiples brushes"
        />
        <img
          data-scroll
          data-scroll-speed="3"
          src="../src/assets/parallax/imgThree.svg"
          alt="image of multiples brushes"
        />
        <img
          data-scroll
          data-scroll-speed="3"
          src="../src/assets/parallax/imgEight.svg"
          alt="image of multiples brushes"
        />
      </div>
      <div>
        <img
          src="../src/assets/parallax/imgFour.svg"
          alt="image of multiples brushes"
        />
        <img
          src="../src/assets/parallax/imgFive.svg"
          alt="image of multiples brushes"
        />
        <img
          src="../src/assets/parallax/imgSix.svg"
          alt="image of multiples brushes"
        />
        <img
          src="../src/assets/parallax/imgFive.svg"
          alt="image of multiples brushes"
        />
        <img
          data-scroll
          data-scroll-speed="3"
          src="../src/assets/parallax/imgThree.svg"
          alt="image of multiples brushes"
        />
      </div>
      <div>
        <img
          src="../src/assets/parallax/imgSeven.svg"
          alt="image of multiples brushes"
        />
        <img
          src="../src/assets/parallax/imgEight.svg"
          alt="image of multiples brushes"
        />
        <img
          src="../src/assets/parallax/imgFive.svg"
          alt="image of multiples brushes"
        />
        <img
          src="../src/assets/parallax/imgNine.svg"
          alt="image of multiples brushes"
        />
        <img
          src="../src/assets/parallax/imgEight.svg"
          alt="image of multiples brushes"
        />
      </div>
    </div>
  );
};

export default Parallax;
