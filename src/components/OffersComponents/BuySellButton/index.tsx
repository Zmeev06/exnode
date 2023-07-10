import React from "react";
import styles from "./index.module.scss";

interface BuySellButtonProps {
  setType: (type: number) => void;
  type: number
}

const BuySellButton = ({ setType, type }: BuySellButtonProps) => {
  return (
    <div className={styles.main}>
      <div
        className={`${styles.btn} ${type === 1 && styles.buyActive}`}
        onClick={() => setType(1)}
      >
        <p className={styles.btnText}>Купить</p>
      </div>
      <div
        className={`${styles.btn} ${type === 2 && styles.sellActive}`}
        onClick={() => setType(2)}
      >
        <p className={styles.btnText}>Продать</p>
      </div>
    </div>
  );
};
export default BuySellButton;
