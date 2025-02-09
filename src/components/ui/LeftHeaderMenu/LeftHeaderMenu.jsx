import styles from "./LeftHeaderMenu.module.scss";

export const LeftHeaderMenu = ({ children }) => {
  return <nav className={styles["left-header-menu"]}>{children}</nav>;
};
