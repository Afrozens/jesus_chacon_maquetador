import React from "react";
import styles from "./Paragraph.module.css";

const Paragraph = ({children, isCenter}: TextType) => {
  return (
    <p
      className={`${styles.paragraph} ${
        isCenter ?? false ? styles.paragraphCenter : styles.paragraphLeft
      }`}>
      {children}
    </p>
  );
};

export default Paragraph;
