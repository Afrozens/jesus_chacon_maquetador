/* eslint-disable @typescript-eslint/restrict-template-expressions */
import {useState} from "react";
import CardSlider from "../CardSlider";
import styles from "./Slider.module.css";

type PreviousOrNext = "next" | "previous" | "wait";

const Slider = () => {
  const images = [
    "imgOne.svg",
    "imgTwo.svg",
    "imgThree.svg",
    "imgFour.svg",
    "imgFive.svg",
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [isWait, setIsWait] = useState<PreviousOrNext>("wait");
  // condition for next and previous img of manner dinamic with index of images array
  const selectNewImage = (index: number, images: string[], next = true) => {
    setIsLoading(true);
    const delayAndLogic = setTimeout(() => {
      const condition = next ? index < images.length - 1 : index > 0;
      const nextIndex = next
        ? condition
          ? index + 1
          : 0
        : condition
        ? index - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
      setIsLoading(false);
      setIsWait("wait");
    }, 500);
    return () => {
      clearTimeout(delayAndLogic);
    };
  };

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
    setIsWait("previous");
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
    setIsWait("next");
  };

  return (
    <>
      <div className={styles.containerSlider}>
        <button onClick={previous} className={styles.btnNext}>
          <img src="/arrow-chevron-left.svg" alt="arrow circle left" />
        </button>
        <img
          src={`/assets/slider/${
            images[selectedIndex === 0 ? images.length - 1 : selectedIndex - 1]
          }`}
          alt="image album previous"
          className={`${styles.imgPrevious} ${
            isWait === "previous" && "opacity-medium"
          }`}
        />
        <CardSlider isLoading={isLoading} image={selectedImage} />
        <img
          src={`/assets/slider/${
            images[selectedIndex === images.length - 1 ? 0 : selectedIndex + 1]
          }`}
          alt="image album next"
          className={`${styles.imgNext} ${
            isWait === "next" && "opacity-medium"
          }`}
        />
        <button onClick={next} className={styles.btnPrevious}>
          <img src="/arrow-chevron-right.svg" alt="arrow circle right" />
        </button>
      </div>
    </>
  );
};

export default Slider;
