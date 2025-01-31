import React from "react";
import styles from "./ProductCard.module.scss";
import { Heart, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  const [isFavourite, setIsFavourite] = React.useState(false);
  const [discountPercent, setDiscountPercent] = React.useState(0);
  // console.log(product);

  // Расчет скидки в процентах
  const discountPriceHandle = (product) => {
    const { oldPrice, price } = product;

    const result = Math.floor(((oldPrice - price) / oldPrice) * 100);
    setDiscountPercent(result);
    console.log("result =>", result);
  };

  // Добавить в избранное////
  const onClickFavorite = () => {
    setIsFavourite(!isFavourite);
  };

  React.useEffect(() => {
    discountPriceHandle(product);
  }, []);

  return (
    <div className={styles["card"]}>
      <button className={styles["card__favorite"]}>
        <Heart
          size={20}
          color={isFavourite ? "#f67373" : "#000"}
          fill={isFavourite ? "#f67373" : "transparent"}
          onClick={() => onClickFavorite()}
        />
      </button>
      <div className={styles["card__img"]}>
        <img src={product.imageUrl[0]} alt="Name" />
      </div>
      <div className={styles["card__content"]}>
        <div className={styles["card__content-price"]}>
          <span className={styles["card__content-price__new"]}>
            {product.price}
          </span>{" "}
          <span className={styles["card__content-price__old"]}>
            {product.oldPrice}
          </span>
          <span className={styles["card__content-price__discount"]}>
            {discountPercent}%
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
      </div>
    </div>
  );
};

export default ProductCard;
