import React, { useState } from "react";
import styles from "./CartProductCard.module.scss";
import { Minus, Plus } from "lucide-react";
import { ProductsContext } from "../../../context/ProductsProvider";
const CartProductCard = ({ product }) => {
  const { removeProductFromCart, totalSum, setTotalSum } =
    React.useContext(ProductsContext);
  const [productCount, setProductCount] = useState(1);

  const handleProductCountPlus = () => {
    // MAX 10
    productCount < 10 && setProductCount(productCount + 1);
    productCount < 10 && setTotalSum(totalSum + product.price);
  };
  const handleProductCountMinus = () => {
    // MIN 1
    // productCount > 1 && setProductCount(productCount - 1);

    if (productCount > 1) {
      setProductCount(productCount - 1);
      setTotalSum(totalSum - product.price);
    } else if (productCount === 1) {
      removeProductFromCart(product.id);
    }
  };

  return (
    <li
      className={styles["cart-popup-window__item"]}
      key={`${product.id}-${product.title}`}
    >
      <div className={styles["cart-popup-window__item-count"]}>
        {productCount} шт.
      </div>
      <img
        className={styles["cart-popup-window__item-image"]}
        src={product.imageUrl[0]}
        alt={product.title}
      />
      <div>
        <h3 className={styles["cart-popup-window__item-title"]}>
          {product.title}
        </h3>
        <span className={styles["cart-popup-window__item-info"]}>
          {product.store} - {product.color}
        </span>
      </div>
      <p className={styles["cart-popup-window__item-price"]}>
        {product.price.toLocaleString("ru-RU", {
          style: "currency",
          currency: "RUB",
        })}
      </p>
      <div className={styles["cart-popup-window__item-buttons"]}>
        <button onClick={handleProductCountPlus}>
          <Plus />
        </button>
        <button onClick={handleProductCountMinus}>
          <Minus />
        </button>
      </div>
    </li>
  );
};

export default CartProductCard;
