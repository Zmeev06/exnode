import React from "react";
import styles from "./index.module.scss";
import Select from "react-select";
import qrcode from '../../../assets/img/popups/qrcode.png';
import { ReactComponent as Cross } from '../../../assets/icons/cross.svg'
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

interface PayOutModalProps {
  isOpenModal: boolean;
  setIsOpenModal: (isOpenModal: boolean) => void;
}

const PayOutModal = ({ isOpenModal, setIsOpenModal }: PayOutModalProps) => {
  return (
    <>
      {isOpenModal && (
        <>
          <div className={styles.popupIn}>
            <div className={styles.popupIn__block}>
              <div className={styles.popupIn__title}>Вывод</div>
              <Cross className={styles.popupIn__close} onClick={() => setIsOpenModal(false)} />
              <div className={styles.popupIn__info}>Ввод криптовалюты USDTTRC осуществляется только в сети TRON (TRC20)</div>
              <div className={styles.popupIn__text}>Выберите валюту</div>
              <Select
                options={options}
                placeholder='Выберите актив'
                className="react-select-container"
                classNamePrefix="react-select"
              />
              <div className={styles.popupIn__text}>Адрес кошелька</div>
              <div className={styles.popupIn__input}>
                <input type="text" placeholder="Введите адрес кошелька" />
              </div>
              <div className={styles.popupIn__text}>Сумма</div>
              <div className={styles.popupIn__input}>
                <input type="text" placeholder="Введите сумму" value={10.00} />
              </div>
              <div className={styles.popupIn__balance}>
                Текущий баланс: <span>≈50.00 USDT</span>
              </div>
              <div className={styles.popupIn__btn}>
                Ввести криптовалюту в кошелек
              </div>
              <div className={styles.popupIn__items}>
                <div className={styles.popupIn__item}>
                  Сумма к получению
                  <span>00.00 USDT</span>
                </div>
                <div className={styles.popupIn__subitem}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#F2EAFF" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 6.66699H10.0083V6.67533H10V6.66699Z" stroke="#F2EAFF" strokeOpacity="0.6" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M10 10V13.3333" stroke="#F2EAFF" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Сумма с учетом комисиии
                  <span>00.00 USDT</span>
                  <div className={styles.popupIn__subitem__info}>
                    Сумма выведенных средств с учетом комиссии сети
                  </div>
                </div>
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

export default PayOutModal;
