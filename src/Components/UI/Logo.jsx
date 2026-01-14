import React from "react";
import LogoImg from "../../assets/logo.svg?react";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <LogoImg />
    </div>
  );
};

export default Logo;
