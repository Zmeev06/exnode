import React from "react";
import styles from "./index.module.scss";
import plus from "../../../assets/icons/plus.svg";

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
      <div className={styles.payment}>
        <p className={styles.summText}>Способ оплаты</p>
        <select className={styles.select}>
          <option value={"sber"}>Сбербанк</option>
          <option value={"tink"}>Тинькофф</option>
          <option value={"raif"}>Райффайзен</option>
          <option value={"alpha"}>АльфаБанк</option>
          <option value={"qiwi"}>Qiwi</option>
        </select>
      </div>
      <div className={styles.filter}>
        <select className={styles.select}>
          <option value={""} disabled>
            Фильтр
          </option>
          <option value={"sber"}>Лучшая цена</option>
          <option value={"tink"}>Новые</option>
        </select>
      </div>
      <div className={styles.btnBlock}>
        <div className={styles.newOfferBtn}>
          <img src={plus} alt="" className={styles.plus} />
          <p className={styles.newOfferBtnText}>Новое объявление</p>
        </div>
      </div>
    </div>
  );
};
export default OffersFilters;
