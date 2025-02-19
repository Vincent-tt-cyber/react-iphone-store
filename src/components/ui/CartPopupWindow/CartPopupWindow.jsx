import { useContext, useEffect, useState } from "react";
import styles from "./CartPopupWindow.module.scss";
import { ProductsContext } from "../../../context/ProductsProvider";
import { Minus, Plus, X } from "lucide-react";
export const CartPopupWindow = () => {
  const [cartCountProducts, setcartCountProducts] = useState(0);
  const [productCount, setProductCount] = useState(0);

  const { cart, setIsCartOpen } = useContext(ProductsContext);

  const handleClose = () => setIsCartOpen(false);

  useEffect(() => {
    setcartCountProducts(cart.length);
  }, [cart]);

  return (
    <div className={styles["cart-popup-window"]}>
      <div className={styles["cart-popup-window__wrapper"]}>
        <button
          onClick={handleClose}
          className={styles["cart-popup-window__close"]}
        >
          <X />
        </button>
        <ul
          className={
            cartCountProducts > 0
              ? styles["cart-popup-window__grid"]
              : styles["art-popup-window__flex"]
          }
          style={
            cartCountProducts > 0
              ? { overflowY: "scroll" }
              : { overflow: "hidden" }
          }
        >
          {cartCountProducts > 0 ? (
            cart.map((product) => (
              <li
                className={styles["cart-popup-window__item"]}
                key={`${product.id}-${product.title}`}
              >
                <div className={styles["cart-popup-window__item-count"]}>{productCount} шт.</div>
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
                  <button>
                    <Plus />
                  </button>
                  <button>
                    <Minus />
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li className={styles["cart-popup-window__item-empty"]}>
              <h3>Ваша корзина пуста</h3>
              <p>Добавьте хотябы один товар. А лучше два!</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
