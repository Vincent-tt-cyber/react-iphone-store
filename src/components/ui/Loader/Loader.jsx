import styles from "./Loader.module.scss";
export const Loader = () => {
  return (
    <div className={styles["loader-container"]}>
      <div className={styles["lds-ripple"]}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
