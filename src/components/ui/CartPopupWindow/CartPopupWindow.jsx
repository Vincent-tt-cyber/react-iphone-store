import { useContext, useEffect } from "react";
import styles from "./CartPopupWindow.module.scss";
import { ProductsContext } from "../../../context/ProductsProvider";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
export const CartPopupWindow = () => {
  const { cart, isCartPopupOpen, setIsCartPopupOpen } =
    useContext(ProductsContext);

  useEffect(() => {
    if (cart) console.log(cart);
  }, [isCartPopupOpen]);

  return (
    <div className={styles["cart-popup-window__wrapper"]}>
      <div className={styles["cart-popup-window__content"]}>
        {cart.length > 0 && (
          <div className={styles["cart-popup-window__header"]}>
            <h1>Ваша корзина</h1>
            <button
              onClick={() => setIsCartPopupOpen(false)}
              className={styles["cart-popup-window__close"]}
            >
              <X size={30} color="#f67373" />
            </button>
          </div>
        )}
        <ul className={styles["cart-popup-window__list"]}>
          {cart.length > 0 ? (
            cart.map((item) => (
              <li key={item.id} className={styles["cart-popup-window__item"]}>
                <div className={styles["cart-popup-window__item-info"]}>
                  <div className={styles["cart-popup-window__item-image"]}>
                    <img src={item.imageUrl[0]} alt={item.title} />
                  </div>
                  <Link
                    onClick={() => setIsCartPopupOpen(false)}
                    to={`/product/${item.id}`}
                  >
                    {item.title} {item.price}
                  </Link>
                </div>
              </li>
            ))
          ) : (
            <li>Корзина пуста</li>
          )}
        </ul>
      </div>
    </div>
  );
};
