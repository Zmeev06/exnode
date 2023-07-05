import React from "react";
import styles from "./index.module.scss";

const OffersFilters = () => {
  return (
    <div className={styles.main}>
      <div className={styles.summ}>
        <p className={styles.summText}>Сумма</p>
        <input
          className={styles.summInput}
          type="text"
          placeholder="Введите сумму"
        />
        <select className={styles.summСurrency}>
          <option value={"rub"}>RUB</option>
          <option value={"eur"}>EUR</option>
          <option value={"usd"}>USD</option>
        </select>
      </div>
    </div>
  );
};
export default OffersFilters;
