import React, { useState } from "react";
import styles from "./index.module.scss";
import plus from "../../../assets/icons/plus.svg";
import filter from "../../../assets/icons/filter.svg";
import { ReactComponent as Plus } from "../../../assets/icons/plusFilter.svg";
import AddNewModal from "../../AddNewModal/MainBlock";
import Select from 'react-select'


const options = [
  { value: 'RUB', label: 'RUB' },
  { value: 'EUR', label: 'EUR' },
  { value: 'USD', label: 'USD' }
]


const OffersFilters = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className={styles.main}>
        <div className={styles.bigFilters}>
          <div className={styles.summ}>
            <p className={styles.summText}>Сумма</p>
            <input
              className={styles.summInput}
              type="text"
              placeholder="Введите сумму"
            />
            <Select options={options} className={styles.summСurrency} />
            {/*             <select className={styles.summСurrency}>
              <option value={"rub"}>RUB</option>
              <option value={"eur"}>EUR</option>
              <option value={"usd"}>USD</option>
            </select> */}
          </div>
          <div className={styles.payment}>
            <p className={styles.summText}>Способ оплаты</p>
            <select className={styles.select}>
              <option value={"sber"} className={styles.option}>
                Сбербанк
              </option>
              <option value={"tink"} className={styles.option}>
                Тинькофф
              </option>
              <option value={"raif"} className={styles.option}>
                Райффайзен
              </option>
              <option value={"alpha"} className={styles.option}>
                АльфаБанк
              </option>
              <option value={"qiwi"} className={styles.option}>
                Qiwi
              </option>
            </select>
          </div>
          <div className={styles.filter}>
            <select className={styles.select}>
              <option value={""} disabled>
                Фильтр
              </option>
              <option value={"sber"} className={styles.option}>
                Лучшая цена
              </option>
              <option value={"tink"} className={styles.option}>
                Новые
              </option>
            </select>
          </div>
          <div className={styles.btnBlock}>
            <div className={styles.newOfferBtn} onClick={() => setIsOpen(true)}>
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
      <AddNewModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
export default OffersFilters;
