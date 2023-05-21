import styles from "./Title.module.css";

const Title = ({children, isCenter}: TextType) => {
  return (
    <h2
      className={`${styles.title} ${
        isCenter ?? false ? styles.titleCenter : styles.titleLeft
      }`}>
      {children}
    </h2>
  );
};

export default Title;
