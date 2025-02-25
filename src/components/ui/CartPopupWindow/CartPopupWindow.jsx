import { useContext, useEffect, useState } from "react";
import styles from "./CartPopupWindow.module.scss";
import { ProductsContext } from "../../../context/ProductsProvider";
import CartProductCard from "../CartProductCard/CartProductCard";
import { X } from "lucide-react";
export const CartPopupWindow = () => {
  const [cartCountProducts, setcartCountProducts] = useState(0);

  const { cart, setIsCartOpen, totalSum } = useContext(ProductsContext);

  const handleClose = () => setIsCartOpen(false);

  useEffect(() => {
    setcartCountProducts(cart.length);
  }, [cart]);

  return (
    <div className={styles["cart-popup-window"]}>
      <div className={styles["cart-popup-window__wrapper"]}>
        <div className={styles["cart-popup-window__header"]}>
          <button
            onClick={handleClose}
            className={styles["cart-popup-window__close"]}
          >
            <X />
          </button>
          <div className={styles["cart-popup-window__total"]}>
            <h3>Сумма:</h3>
            <span>
              {totalSum.toLocaleString("ru-RU", {
                style: "currency",
                currency: "RUB",
              })}
            </span>
          </div>
        </div>
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
              <CartProductCard key={product.id} product={product} />
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
