import styles from "./Header.module.scss";
import {
  Cable,
  Home,
  LayoutDashboard,
  Menu,
  ShoppingBag,
  Smartphone,
  Wrench,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

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
          <Link to="/" className={styles["header-logo"]}>
            <h1>React iPhone Store</h1>
            <Smartphone
              className={styles["header-logo__icon"]}
              size={30}
              color="#f67373"
            />
          </Link>
          <nav className={styles["header__nav"]}>
            <ul className={styles["header-menu"]}>
              {headerLinks.map((link) => (
                <li key={link.id} className={styles["header-menu__item"]}>
                  <Link
                    to={link.path}
                    className={
                      location.pathname === link.path
                        ? styles["header-menu__item-link-active"]
                        : styles["header-menu__item-link"]
                    }
                  >
                    <div>{link.icon}</div>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles["header-menu-burger"]}>
              <Menu color="#fff" size={25} />
            </div>
            <button className={styles["header-cart__btn"]}>
              <ShoppingBag
                color="#fff"
                className={styles["header-cart__btn-icon"]}
                size={30}
              />
              <span className={styles["header-cart__btn-count"]}>0</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
