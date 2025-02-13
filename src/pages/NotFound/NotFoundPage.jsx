import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
  return (
    <>
      <div className={styles["not-found"]}>
        <div className="container">
          <div className={styles["not-found__content"]}>
            <div className={styles["not-found__content__wrap"]}>
              <div className={styles["eye"]}></div>
            </div>
            <h1>Страница не найдена</h1>
            <Link to="/">Вернуться на главную</Link>
          </div>
        </div>
      </div>
    </>
  );
};
