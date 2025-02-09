/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { iphonesData } from "../data/productsData";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  // Добавление товара в корзину
  const addProductToCart = (product) => {
    setCart([...cart, product]);
    // console.log("Добавлен в корзину", product);
  };

  // Удаление товара из корзины
  const removeProductFromCart = (id) => {
    // console.log("Удален из корзины", id);
    setCart(cart.filter((item) => item.id !== id));
  };

  // Получение продуктов
  const fetchProducts = () => {
    setIsLoading(true);

    setProducts(iphonesData);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    // console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        cart,
        setCart,
        addProductToCart,
        removeProductFromCart,
        products,
        isLoading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
