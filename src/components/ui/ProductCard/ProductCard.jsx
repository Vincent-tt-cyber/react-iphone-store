/* eslint-disable react/prop-types */
import React from "react";
import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { ProductsContext } from "../../../context/ProductsProvider";

const ProductCard = ({ product }) => {
  const { addProductToCart, removeProductFromCart } =
    React.useContext(ProductsContext);

  const [discountPercent, setDiscountPercent] = React.useState(0);
  const [isAdded, setIsAdded] = React.useState(false);

  // Добавление товара в корзину
  const toggleAddToCart = () => {
    // Добавление в корзину
    if (isAdded) {
      setIsAdded(false);
      removeProductFromCart(product.id);
    } else {
      setIsAdded(true);
      addProductToCart(product);
    }
  };

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
      <button
        className={isAdded ? styles["card__btn-active"] : styles["card__btn"]}
        onClick={toggleAddToCart}
      >
        <span className={styles["card__btn-title"]}>
          {isAdded ? "В корзине" : "В корзину"}
        </span>

        <Plus className={styles["card__btn-icon"]} />
      </button>
    </div>
  );
};

export default ProductCard;
