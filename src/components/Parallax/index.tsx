import {useRef} from "react";
import styles from "./Parallax.module.css";
import {useScroll, useTransform, motion} from "framer-motion";
import type {MotionValue} from "framer-motion";

const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, "-350"]);
};

const Parallax = () => {
  // my ref of html element
  const scrollRef = useRef(null);
  // for the definition of space in my div
  const {scrollYProgress} = useScroll({target: scrollRef});
  // something "dinamic" for animation parallax with useParallax (useTransform)
  const y = useParallax(scrollYProgress, 100);
  return (
    <div className={styles.container} ref={scrollRef}>
      <motion.div style={{y}}>
        <img
          src="/assets/parallax/imgOne.svg"
          alt="image of multiples brushes"
        />
        <img
          src="/assets/parallax/imgTwo.svg"
          alt="image of multiples brushes"
        />
        <img
          src="/assets/parallax/imgNine.svg"
          alt="image of multiples brushes"
        />
        <img
          src="/assets/parallax/imgThree.svg"
          alt="image of multiples brushes"
        />
        <img
          src="/assets/parallax/imgEight.svg"
          alt="image of multiples brushes"
        />
      </motion.div>

      <motion.div style={{y}}>
        <img
          src="/assets/parallax/imgFour.svg"
          alt="image of multiples brushes"
        />
        <img
          src="/assets/parallax/imgFive.svg"
          alt="image of multiples brushes"
        />
        <img
          src="/assets/parallax/imgSix.svg"
          alt="image of multiples brushes"
        />
        <img
          src="/assets/parallax/imgFive.svg"
          alt="image of multiples brushes"
        />
        <img
          src="/assets/parallax/imgThree.svg"
          alt="image of multiples brushes"
        />
      </motion.div>

      <motion.div style={{y}}>
        <img
          src="/assets/parallax/imgSeven.svg"
          alt="image of multiples brushes"
        />
        <img
          src="/assets/parallax/imgEight.svg"
          alt="image of multiples brushes"
        />
        <img
          src="/assets/parallax/imgFive.svg"
          alt="image of multiples brushes"
        />
        <img
          src="/assets/parallax/imgNine.svg"
          alt="image of multiples brushes"
        />
        <img
          src="/assets/parallax/imgEight.svg"
          alt="image of multiples brushes"
        />
      </motion.div>

      <motion.div style={{y}}>
        <img
          src="/assets/parallax/imgFour.svg"
          alt="image of multiples brushes"
        />
        <img
          src="/assets/parallax/imgFive.svg"
          alt="image of multiples brushes"
        />
        <img
          src="/assets/parallax/imgSix.svg"
          alt="image of multiples brushes"
        />
        <img
          src="/assets/parallax/imgFive.svg"
          alt="image of multiples brushes"
        />
        <img
          src="/assets/parallax/imgThree.svg"
          alt="image of multiples brushes"
        />
      </motion.div>
    </div>
  );
};

export default Parallax;
