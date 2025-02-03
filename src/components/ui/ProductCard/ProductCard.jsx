/* eslint-disable react/prop-types */
import React from "react";
import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [discountPercent, setDiscountPercent] = React.useState(0);
  // Расчет скидки в процентах
  const discountPriceHandle = (product) => {
    const { oldPrice, price } = product;

    const result = Math.floor(((oldPrice - price) / oldPrice) * 100);
    setDiscountPercent(result);
  };

  React.useEffect(() => {
    discountPriceHandle(product);
  }, []);

  return (
    <div className={styles["card"]}>
      <div className={styles["card__img"]}>
        <Link to={`/product/${product.id}`}>
          <img src={product.imageUrl[0]} alt="Name" />
        </Link>
      </div>
      <Link to={`/product/${product.id}`} className={styles["card__content"]}>
        <div className={styles["card__content-price"]}>
          <div className={styles["card__content-price__header"]}>
            <span className={styles["card__content-price__old"]}>
              {product.oldPrice.toLocaleString("ru-RU", {
                style: "currency",
                currency: "RUB",
              })}
            </span>
            <span className={styles["card__content-price__discount"]}>
              {discountPercent}%
            </span>
          </div>
          <span className={styles["card__content-price__new"]}>
            {product.price.toLocaleString("ru-RU", {
              style: "currency",
              currency: "RUB",
            })}
          </span>
        </div>
        <div className="card__content-info">
          <h3 className={styles["card__content-info__title"]}>
            {product.title}
          </h3>
          <span className={styles["card__content-info__description"]}>
            {product.store}, <span>{product.color}</span>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
