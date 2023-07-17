import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Select from "react-select";
import "./style2.scss";
import qrcode from "../../../assets/img/popups/qrcode.png";
import { ReactComponent as Cross } from "../../../assets/icons/cross.svg";
import { payInMethod } from "../../../services/profileServices";
import { decode as base64_decode } from "base-64";

const options = [
  { value: "1", label: "USDT" },
  { value: "2", label: "BTC" },
  { value: "3", label: "ETH" },
];

interface PayInModalProps {
  isOpenModal: boolean;
  setIsOpenModal: (isOpenModal: boolean) => void;
}

const PayInModal = ({ isOpenModal, setIsOpenModal }: PayInModalProps) => {
  const [currency, setCurrency] = useState(1);
  const [status, setStatus] = useState(false);
  const [payToken, setPayToken] = useState("");
  const token = localStorage.getItem("token")?.replace(/"/g, "") || "";
  const [qr, setQr] = useState("");

  const payIn = async () => {
    const { data } = await payInMethod(token, currency);
    setPayToken(data.data.token);
    setQr(data.data.qrcode);
    console.log(data);
  };

  useEffect(() => {
    payIn();
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
              <div className={styles.popupIn__title}>Ввод</div>
              <Cross
                className={styles.popupIn__close}
                onClick={() => setIsOpenModal(false)}
              />

              <div className={styles.popupIn__warning}>
                Минимальная сумма ввода криптовалюты:
                <span>
                  {`10 ${
                    currency === 1 ? "USDT" : currency === 2 ? "BTC" : "ETH"
                  }`}
                </span>
              </div>
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
              <div className={styles.popupIn__qrcode}>
                <img src={qr} alt="" />
              </div>
              <div className={styles.popupIn__code}>
                {payToken}
              </div>
              <div className={styles.popupIn__btn} onClick={() => payIn()}>
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
