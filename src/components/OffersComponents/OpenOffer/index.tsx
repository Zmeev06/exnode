import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { getProfile } from "../../../services/profileServices";
import { createOrder } from "../../../services/paymentService";
import { useNavigate } from "react-router-dom";

interface OpenOfferProps {
  name: string;
  price: string;
  limit_start: number;
  currency: number;
  paymentMethod: number;
  setIsOpen: (isOpen: boolean) => void;
  id: number
}

const OpenOffer = ({
  name,
  price,
  limit_start,
  currency,
  paymentMethod,
  setIsOpen,
  id
}: OpenOfferProps) => {
  const payment = [
    "Сбербанк",
    "Тинькофф",
    "Райффайзен",
    "АльфаБанк",
    "Qiwi",
    "Наличные RUB",
  ];
  const [balance, setBalance] = useState(0);
  const token = localStorage.getItem("token")?.replace(/"/g, "") || "";
  const getProfileFunc = async () => {
    const { data } = await getProfile(token);
    currency === 1
      ? setBalance(data?.data.balance_usdt)
      : currency === 2
      ? setBalance(data?.data.balance_btc)
      : setBalance(data?.data.balance_eth);
  };
  useEffect(() => {
    getProfileFunc();
  }, []);

  const [summ, setSumm] = useState('')
  const navigate = useNavigate()
  const Create = async() => {
    const {data} = await createOrder(token, id, +summ)
    navigate(`/offer/buy/${data.id}`)
  }
  return (
    <div className={styles.main}>
      <div className={styles.infoBlock}>
        <div className={styles.profileBlock}>
          <div className={styles.profile} />
          <p>{name}</p>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>Цена:</p>
          <p className={styles.itemText}>{price}</p>
          <p className={styles.currency}>RUB</p>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>Доступно:</p>
          <p className={styles.itemText}>{limit_start}</p>
          <p className={styles.currency}>
            {currency === 1 ? "USDT" : currency === 2 ? "BTC" : "ETH"}
          </p>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>Способ получения оплаты:</p>
          <p className={styles.itemText}>{payment[paymentMethod - 1]}</p>
        </div>
      </div>
      <div className={styles.form}>
        <p className={styles.title}>Продаю</p>
        <div className={styles.inputBlock}>
          <input className={styles.input} placeholder="0" value={summ} onChange={(e) => setSumm(e.target.value)}/>
          <p className={styles.inputOption}>
            {currency === 1 ? "USDT" : currency === 2 ? "BTC" : "ETH"}
          </p>
        </div>
        <div className={styles.item}>
          <p>Баланс:</p>
          <p>{balance}</p>
          <p>{currency === 1 ? "USDT" : currency === 2 ? "BTC" : "ETH"}</p>
        </div>
        <p className={styles.title}>Получу</p>
        <div className={styles.inputBlock}>
          <input className={styles.input} placeholder="0" readOnly value={+summ*95}/>
          <p className={styles.inputOption}>
            RUB
          </p>
        </div>
        <div className={styles.payment}>
        <p className={styles.title}>Способ пополнения</p>
        <select className={styles.input}>
          {payment.map((item, index) => (
            <option value={index + 1}>{item}</option>
          ))}
        </select>
        </div>
        
        <p className={styles.title}>Расчетная цена</p>
        <p className={styles.price}>
          1 {currency === 1 ? "USDT" : currency === 2 ? "BTC" : "ETH"} ≈ 95.29
          RUB
        </p>
        <div className={styles.btns}>
          <div className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <p>Отменить</p>
          </div>
          <div className={styles.btn} onClick={() => Create()}>
            <p>Купить</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OpenOffer;