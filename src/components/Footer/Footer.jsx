import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className="container">
        <p className={styles["footer__text"]}>
          &#169; Петров Е.А., {new Date().getFullYear()} React iPhone Store.
        </p>
        <p className={styles["footer__text"]}>Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
