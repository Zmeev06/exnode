import React from "react";
import styles from "./index.module.scss";
import plus from "../../../assets/icons/plus.svg";
import filter from "../../../assets/icons/filter.svg";
import { ReactComponent as Plus } from "../../../assets/icons/plusFilter.svg";
import Select from "react-select";


const payOptions = [
  { label: 'Сбербанк', value: '1' },
  { label: 'Тинькофф', value: '2' },
  { label: 'Райфанзен', value: '3' },
  { label: 'Альфабанк', value: '4' },
  { label: 'Qiwi', value: '5' }
]

const filterOptions = [
  { label: 'Лучшая цена', value: '1' },
  { label: 'Новые', value: '2' },
]


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
        </div>
        <div className={styles.payment}>
          <p className={styles.summText}>Способ оплаты</p>
          <Select options={payOptions} classNames={{control : (state) => styles.select, menu: (state) => styles.menu, option: (state) => styles.option}} />
        </div>
        <div className={styles.filter}>
        <Select options={filterOptions} classNames={{control : (state) => styles.select, menu: (state) => styles.menu, option: (state) => styles.option}} />
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
