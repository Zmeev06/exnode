import React from "react";
import styles from "./index.module.scss";

interface PayBlockProps {
  header: string;
  sum: number | string;
  priceRub: number | string;
  priceUSDT: number | string;
  children: string | JSX.Element | JSX.Element[];
}

const PayBlock = ({
  header,
  sum,
  priceRub,
  priceUSDT,
  children,
}: PayBlockProps) => {
  return (
    <div className={styles.main}>
      <p className={styles.title}>{header}</p>
      <div className={styles.orderInfo}>
        <div className={styles.summ}>
          <p className={styles.orderTitle}>Сумма</p>
          <p className={styles.orderText}>{sum}₽</p>
        </div>
        <div className={styles.price}>
          <p className={styles.orderTitle}>Цена</p>
          <p className={styles.orderText}>{priceRub}₽</p>
        </div>
        <div className={styles.count}>
          <p className={styles.orderTitle}>Количество</p>
          <p className={styles.orderText}>{priceUSDT}USDT</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default PayBlock;
