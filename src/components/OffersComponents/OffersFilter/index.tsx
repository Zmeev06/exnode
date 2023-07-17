import React from "react";
import styles from "./index.module.scss";
import plus from "../../../assets/icons/plus.svg";
import filter from "../../../assets/icons/filter.svg";
import { ReactComponent as Plus } from "../../../assets/icons/plusFilter.svg";

const OffersFilters = () => {
  return (
    <div className={styles.main}>
      <div className={styles.bigFilters}>
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
            <option value={"sber"} className={styles.option}>Сбербанк</option>
            <option value={"tink"} className={styles.option}>Тинькофф</option>
            <option value={"raif"} className={styles.option}>Райффайзен</option>
            <option value={"alpha"} className={styles.option}>АльфаБанк</option>
            <option value={"qiwi"} className={styles.option}>Qiwi</option>
          </select>
        </div>
        <div className={styles.filter}>
          <select className={styles.select}>
            <option value={""} disabled>
              Фильтр
            </option>
            <option value={"sber"} className={styles.option}>Лучшая цена</option>
            <option value={"tink"} className={styles.option}>Новые</option>
          </select>
        </div>
        <div className={styles.btnBlock}>
          <div className={styles.newOfferBtn}>
            <img src={plus} alt="" className={styles.plus} />
            <p className={styles.newOfferBtnText}>Новое объявление</p>
          </div>
        </div>
      </div>

      <div className={styles.miniFilters}>
        <img src={filter} alt="" className={styles.filterIcon} />
        <Plus className={styles.miniPlus} />
      </div>
    </div>
  );
};
export default OffersFilters;
