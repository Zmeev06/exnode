import React from "react";
import styles from "./index.module.scss";

// import ContentBlock from "../../UI/ContentBlock";
// import TextButton from "../../UI/TextButton";


interface PayBlockProps {
  sum:string;
  price: string;
  requisites: string;
  paymentMethod: number
}
const PayBlock = ({sum, price, requisites, paymentMethod}: PayBlockProps) => {
  return (
    <div className={styles.main}>
      <p className={styles.title}>Подтвердите информацию об ордере</p>
      <div className={styles.orderInfo}>
        <div className={styles.summ}>
          <p className={styles.orderTitle}>Сумма</p>
          <p className={styles.orderText}>{sum}₽</p>
        </div>
        <div className={styles.price}>
          <p className={styles.orderTitle}>Цена</p>
          <p className={styles.orderText}>{price}₽</p>
        </div>
        <div className={styles.count}>
          <p className={styles.orderTitle}>Количество</p>
          <p className={styles.orderText}>11.43USDT</p>
        </div>
      </div>
      <p className={styles.title}>
        Переведите средства на счет продавца указанный ниже
      </p>
      <div className={styles.requisites}>
        <div className={styles.payMethod}>
          <p className={styles.payMethodText}>Tinkoff</p>
        </div>
        <div className={styles.saller}>
          {/* <div className={styles.sallerInfo}>
            <p className={styles.sallerTitle}>Фамилия Имя</p>
            <p className={styles.sallerText}>Иванов Иван Иванович</p>
          </div> */}
          <div className={styles.sallerInfo}>
            <p className={styles.sallerTitle}>Реквизиты</p>
            <p className={styles.sallerText}>{requisites}</p>
          </div>
        </div>
      </div>
      <div className={styles.btnsBlock}>
        {/* <TextButton text="Оплачено" width={250} /> */}
        <p className={styles.reset}>Отменить ордер</p>
      </div>
    </div>
  );
};
export default PayBlock;
