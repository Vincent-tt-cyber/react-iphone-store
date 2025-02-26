import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
  return (
    <>
      <div className={styles["not-found"]}>
        <div className={styles["not-found__content"]}>
          <h1>Страница не найдена</h1>
          <Link to="/">Вернуться на главную</Link>
        </div>
      </div>
    </>
  );
};
