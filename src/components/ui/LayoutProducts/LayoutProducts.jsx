import React from "react";
import styles from "./LayoutProducts.module.scss";

const LayoutProducts = ({ children, type }) => {
  return (
    <div className="container">
      <div className={type == "grid" ? styles["grid"] : styles["column"]}>
        {children}
      </div>
    </div>
  );
};

export default LayoutProducts;
