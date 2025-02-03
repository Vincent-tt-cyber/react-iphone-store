import React from "react";
import styles from "./LayoutProducts.module.scss";

const LayoutProducts = ({ children, type }) => {
  return (
    <div className={type == "grid" ? styles["grid"] : styles["column"]}>
      {children}
    </div>
  );
};

export default LayoutProducts;
