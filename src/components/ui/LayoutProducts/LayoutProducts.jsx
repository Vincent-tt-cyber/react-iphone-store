import React from "react";
import styles from "./LayoutProducts.module.scss";

const LayoutProducts = ({ children }) => {
  return (
    <div className="container">
      <div className={styles["grid"]}>{children}</div>
    </div>
  );
};

export default LayoutProducts;
