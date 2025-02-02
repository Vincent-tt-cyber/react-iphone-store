import styles from "./Header.module.scss";
import {
  Cable,
  Home,
  LayoutDashboard,
  ShoppingBag,
  Smartphone,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const headerLinks = [
    {
      id: 1,
      title: "Главная",
      path: "/",
      icon: <Home size={20} />,
    },
    {
      id: 2,
      title: "Каталог",
      path: "/catalog",
      icon: <LayoutDashboard size={20} />,
    },
    {
      id: 3,
      title: "Акссесуары",
      path: "/accessories",
      icon: <Cable size={20} />,
    },
    {
      id: 4,
      title: "Услуги",
      path: "/services",
      icon: <Wrench size={20} />,
    },
  ];

  return (
    <header className={styles["header"]}>
      <div className="container">
        <div className={styles["header-row"]}>
          <div className={styles["header-logo"]}>
            <h1>React iPhone Store</h1>
            <Smartphone
              className={styles["header-logo__icon"]}
              size={40}
              color="#f67373"
            />
          </div>
          <ul className={styles["header-menu"]}>
            {headerLinks.map((link) => (
              <li key={link.id} className={styles["header-menu__item"]}>
                <Link
                  to={link.path}
                  className={styles["header-menu__item-link"]}
                >
                  <div>{link.icon}</div>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <button className={styles["header-cart__btn"]}>
            <ShoppingBag
              color="#fff"
              className={styles["header-cart__btn-icon"]}
              size={25}
            />
            <span className={styles["header-cart__btn-count"]}>0</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
