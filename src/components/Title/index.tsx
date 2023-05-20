import React from "react";
import styles from "./Title.module.css";

const Title = ({children, isCenter}: TextType) => {
  return (
    <h2 className={`${styles.title} ${isCenter && styles.titleCenter}`}>
      {children}
    </h2>
  );
};

export default Title;
