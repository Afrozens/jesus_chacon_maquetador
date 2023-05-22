import styles from "./CardSlider.module.css";
import {motion} from "framer-motion";
interface PropsType {
  image: string;
  isLoading: boolean;
}

const boing = {
  hidden: {scale: 0.7, translateX: "-50%"},
  visible: {
    scale: 1,
    translateX: "-50%",
    transition: {
      duration: 0.2,
    },
  },
};
const CardSlider = ({image, isLoading}: PropsType) => {
  return (
    <motion.div
      className={styles.card}
      variants={boing}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.8}}>
      <img
        src={`/assets/slider/${image}`}
        alt="image of album of music"
        className={`${isLoading ? "opacity-medium" : "opacity-complete"}`}
      />
      <h5>albumName</h5>
      <h6>Publicado: date</h6>
    </motion.div>
  );
};

export default CardSlider;
