import React from "react";
import styles from "./index.module.scss";
import Select from "react-select";
import { ReactComponent as Cross } from '../../../assets/icons/cross.svg'

interface NewPayMethodProps {
  isOpenModal: boolean;
  setIsOpenModal: (isOpenModal: boolean) => void;
}
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const NewPayMethod = ({ isOpenModal, setIsOpenModal }: NewPayMethodProps) => {
  return (
    <>
      {isOpenModal && (
        <>
          <div className={styles.popupIn}>
            <div className={styles.popupIn__block}>
              <div className={styles.popupIn__title}>Новый способ оплаты</div>
              <Cross className={styles.popupIn__close} onClick={() => setIsOpenModal(false)} />

              <div className={styles.popupIn__text}>Банк</div>
              <Select
                options={options}
                placeholder='Все'
                className="react-select-container"
                classNamePrefix="react-select"
              />
              <div className={styles.popupIn__text}>№ карты</div>
              <div className={styles.popupIn__input}>
                <input type="text" placeholder="____ ____ ____ ____" />
              </div>
              <div className={styles.popupIn__btn}>
                Добавить способ оплаты
              </div>
            </div>
          </div>
          {/* ниже пример закрытия модалки */}
          {/* <button onClick={() => setIsOpenModal(false)}>закрыть</button> */}
        </>
      )}
    </>
  );
};

export default NewPayMethod;
