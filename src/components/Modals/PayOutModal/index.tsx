import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Select from "react-select";
import qrcode from "../../../assets/img/popups/qrcode.png";
import { ReactComponent as Cross } from "../../../assets/icons/cross.svg";
import { getProfile, payOutMethod } from "../../../services/profileServices";
const options = [
  { value: "1", label: "USDT" },
  { value: "2", label: "BTC" },
  { value: "3", label: "ETH" },
];

interface PayOutModalProps {
  isOpenModal: boolean;
  setIsOpenModal: (isOpenModal: boolean) => void;
}

const PayOutModal = ({ isOpenModal, setIsOpenModal }: PayOutModalProps) => {
  const token = localStorage.getItem("token")?.replace(/"/g, "") || "";
  const [currency, setCurrency] = useState(1);
  const [walletAddress, setWalletAddress] = useState("");
  const [summ, setSumm] = useState(10);
  const [balance, setBalance] = useState(0);

  const payOut = async () => {
    const { data } = await payOutMethod(token, currency, walletAddress, summ);
    console.log(data)
  };

  const getBalance = async () => {
    const { data } = await getProfile(token);
    currency === 1 && setBalance(data.data.balance_usdt);
    currency === 2 && setBalance(data.data.balance_btc);
    currency === 3 && setBalance(data.data.balance_eth);
  };

  useEffect(() => {
    getBalance();
  }, [currency]);
  return (
    <>
      {isOpenModal && (
        <>
          <div className={styles.popupIn} onClick={() => setIsOpenModal(false)}>
            <div
              className={styles.popupIn__block}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.popupIn__title}>Вывод</div>
              <Cross
                className={styles.popupIn__close}
                onClick={() => setIsOpenModal(false)}
              />
              <div className={styles.popupIn__info}>
                Ввод криптовалюты USDTTRC осуществляется только в сети TRON
                (TRC20)
              </div>
              <div className={styles.popupIn__text}>Выберите валюту</div>
              <Select
                options={options}
                placeholder="Выберите актив"
                className="react-select-container"
                classNamePrefix="react-select"
                onChange={(e) => e && setCurrency(+e?.value)}
              />
              <div className={styles.popupIn__text}>Адрес кошелька</div>
              <div className={styles.popupIn__input}>
                <input
                  type="text"
                  placeholder="Введите адрес кошелька"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                />
              </div>
              <div className={styles.popupIn__text}>Сумма</div>
              <div className={styles.popupIn__input}>
                <input
                  type="text"
                  placeholder="Введите сумму"
                  value={summ}
                  onChange={(e) => setSumm(+e.target.value)}
                />
              </div>
              <div className={styles.popupIn__balance}>
                Текущий баланс:{" "}
                <span>
                  {`${balance} ${
                    currency === 1 ? "USDT" : currency === 2 ? "BTC" : "ETH"
                  }`}
                </span>
              </div>
              <div className={styles.popupIn__btn} onClick={() => payOut()}>
                Ввести криптовалюту в кошелек
              </div>
              <div className={styles.popupIn__items}>
                <div className={styles.popupIn__item}>
                  Сумма к получению
                  <span>{`${summ} ${
                    currency === 1 ? "USDT" : currency === 2 ? "BTC" : "ETH"
                  }`}</span>
                </div>
                <div className={styles.popupIn__subitem}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                      stroke="#F2EAFF"
                      strokeOpacity="0.6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 6.66699H10.0083V6.67533H10V6.66699Z"
                      stroke="#F2EAFF"
                      strokeOpacity="0.6"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 10V13.3333"
                      stroke="#F2EAFF"
                      strokeOpacity="0.6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Сумма с учетом комисиии
                  <span>{`${summ} ${
                    currency === 1 ? "USDT" : currency === 2 ? "BTC" : "ETH"
                  }`}</span>
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
