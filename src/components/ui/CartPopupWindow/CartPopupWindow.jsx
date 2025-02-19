import { useContext, useEffect, useState } from "react";
import styles from "./CartPopupWindow.module.scss";
import { ProductsContext } from "../../../context/ProductsProvider";
import CartProductCard from "../CartProductCard/CartProductCard";
import { X } from "lucide-react";
export const CartPopupWindow = () => {
  const [cartCountProducts, setcartCountProducts] = useState(0);

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
