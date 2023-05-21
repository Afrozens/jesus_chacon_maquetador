import styles from "./CardSlider.module.css";
interface PropsType {
  image: string;
  isLoading: boolean;
}

const CardSlider = ({image, isLoading}: PropsType) => {
  return (
    <div className={styles.card}>
      <img
        src={`/assets/slider/${image}`}
        alt="image of album of music"
        className={`${isLoading ? "opacity-medium" : "opacity-complete"}`}
      />
      <h5>albumName</h5>
      <h6>Publicado: date</h6>
    </div>
  );
};

export default CardSlider;
