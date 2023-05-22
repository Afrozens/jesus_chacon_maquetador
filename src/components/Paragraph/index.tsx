import styles from "./Paragraph.module.css";
import {motion} from "framer-motion";
const Paragraph = ({children, isCenter}: ParagraphType) => {
  return (
    <motion.p
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      viewport={{once: true, amount: 0.8}}
      className={`${styles.paragraph} ${
        isCenter ?? false ? styles.paragraphCenter : styles.paragraphLeft
      }`}>
      {children}
    </motion.p>
  );
};

export default Paragraph;
