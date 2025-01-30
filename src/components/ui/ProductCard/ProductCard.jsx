import React from "react";
import styles from "./ProductCard.module.scss";
import { Heart, Star } from "lucide-react";

const ProductCard = () => {
  const [isFavourite, setIsFavourite] = React.useState(false);

  const product = {
    id: 1,
    title: "iPhone 11",
    description: "128GB, Space Gray",
    price: "18 000₽",
    oldPrice: "20 000₽",
    discount: "-10%",
  };

  // Добавить в избранное/
  const onClickFavorite = () => {
    setIsFavourite(!isFavourite);
  };

  // Добавить в корзину

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
        <img
          src="https://cheboksary.stores-apple.com/upload/iblock/1ae/kjp8t7g92174c7rcmi5i7sl1ek5keskp.jpg"
          alt="Name"
        />
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
            {product.discount}
          </span>
        </div>
        <div className="card__content-info">
          <h3 className={styles["card__content-info__title"]}>iPhone 11</h3>
          <span className={styles["card__content-info__description"]}>
            128GB, Space Gray
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
