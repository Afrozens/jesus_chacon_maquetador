import {motion} from "framer-motion";
import styles from "./Title.module.css";

const Title = ({line, lineTwo, isCenter}: TextType) => {
  const sentence = {
    hidden: {opacity: 1},
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: {opacity: 0, y: 50},
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.h2
      variants={sentence}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.8}}
      className={`${styles.title} ${
        isCenter ?? false ? styles.titleCenter : styles.titleLeft
      }`}>
      {line.split("").map((char, index) => (
        <motion.span key={`${char}-${index}`} variants={letter}>
          {char}
        </motion.span>
      ))}
      {lineTwo != null &&
        String(lineTwo)
          .split("")
          .map((char, index) => (
            <motion.b key={`${char}-${index}`} variants={letter}>
              {char}
            </motion.b>
          ))}
    </motion.h2>
  );
};

export default Title;
