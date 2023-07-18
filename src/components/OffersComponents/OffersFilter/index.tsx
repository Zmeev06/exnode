import React, { useState } from "react";
import styles from "./index.module.scss";
import plus from "../../../assets/icons/plus.svg";
import filter from "../../../assets/icons/filter.svg";
import { ReactComponent as Plus } from "../../../assets/icons/plusFilter.svg";
import AddNewModal from "../../AddNewModal/MainBlock";
import Select from "react-select";

const payOptions = [
  { label: "Сбербанк", value: "1" },
  { label: "Тинькофф", value: "2" },
  { label: "Райффайзен", value: "3" },
  { label: "АльфаБанк", value: "4" },
  { label: "Qiwi", value: "5" },
];

const filterOptions = [
  { label: "Лучшая цена", value: "1" },
  { label: "Новые", value: "2" },
];

const OffersFilters = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          </div>
          <div className={styles.payment}>
            <p className={styles.summText}>Способ оплаты</p>
            <Select
              options={payOptions}
              classNames={{ container: (state) => styles.select2 }}
              classNamePrefix="react-select"
              placeholder="Все"
            />
          </div>
          <div className={styles.filter}>
            <Select
              options={filterOptions}
              classNames={{ container: (state) => styles.select }}
              classNamePrefix="react-select"
            />
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
