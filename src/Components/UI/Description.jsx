import React from "react";
import styles from "./Description.module.css";

const Description = ({children}) => {
  return (
    <p className={styles.description}>
      {children}
    </p>
  );
};

export default Description;
