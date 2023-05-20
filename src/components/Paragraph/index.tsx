import React from "react";
import styles from "./Paragraph.module.css";

const Paragraph = ({children, isCenter}: TextType) => {
  return (
    <p className={`${styles.paragraph} ${isCenter && styles.paragraphCenter}`}>
      {children}
    </p>
  );
};

export default Paragraph;
