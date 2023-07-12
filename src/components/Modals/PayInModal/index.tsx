import React from "react";
import styles from "./index.module.scss";
import Select from "react-select";
import './style2.scss';
import qrcode from '../../../assets/img/popups/qrcode.png';
import { ReactComponent as Cross } from '../../../assets/icons/cross.svg'

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

interface PayInModalProps {
  isOpenModal: boolean;
  setIsOpenModal: (isOpenModal: boolean) => void;
}

const PayInModal = ({ isOpenModal, setIsOpenModal }: PayInModalProps) => {
  return (
    <>
      {isOpenModal && (
        <>
          <div className={styles.popupIn}>
            <div className={styles.popupIn__block}>
              <div className={styles.popupIn__title}>Ввод</div>
              <Cross className={styles.popupIn__close} onClick={() => setIsOpenModal(false)} />

              <div className={styles.popupIn__warning}>
                Минимальная сумма ввода криптовалюты:
                <span>10 USDT</span>
              </div>
              <div className={styles.popupIn__info}>Ввод криптовалюты USDTTRC осуществляется только в сети TRON (TRC20)</div>
              <div className={styles.popupIn__text}>Выберите валюту</div>
              <Select
                options={options}
                placeholder='Выберите актив'
                className="react-select-container"
                classNamePrefix="react-select"
              />
              <div className={styles.popupIn__qrcode}>
                <img src={qrcode} alt="" />
              </div>
              <div className={styles.popupIn__code}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3333 2.5H3.33331V13.3333" stroke="#6522D9" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8 7H18V17C18 17.442 17.8244 17.866 17.5118 18.1785C17.1993 18.4911 16.7754 18.6667 16.3333 18.6667H9.66667C9.22464 18.6667 8.80072 18.4911 8.48816 18.1785C8.1756 17.866 8 17.442 8 17V7Z" stroke="#6522D9" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                A0000aaaa00aAAA0000AAAaAAaAAaaaa0000
              </div>
              <div className={styles.popupIn__btn}>
                Ввести криптовалюту в кошелек
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

export default PayInModal;
