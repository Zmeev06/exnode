import React from "react";
import styles from "./index.module.scss";

interface OffersItemProps {
  name: string;
  price: string;
  limit_start: number;
  limit_end: number;
  currency: number;
  id: number;
}

const OffersItem = ({
  name,
  price,
  limit_start,
  limit_end,
  currency,
  id,
}: OffersItemProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.items}>
        <div className={styles.item1}>
          <div className={styles.profile}></div>
          <p className={styles.username}>{name}</p>
        </div>
        <div className={styles.item2}>
          <p>{price}</p>
          <p className={styles.currency}>RUB</p>
        </div>
        <div className={styles.item3}>
          <div className={styles.limit}>
            <p className={styles.limitTitle}>Доступно</p>
            <p>
              {`${limit_start} ${
                currency === 1 ? "USDT" : currency === 2 ? "BTC" : "ETH"
              }`}
            </p>
          </div>
          <div className={styles.limit}>
            <p className={styles.limitTitle}>Лимит</p>
            <p>{limit_end} RUB</p>
          </div>
        </div>
        <div className={styles.item4}>
          <div>
            <p>QIWI</p>
          </div>
        </div>
        <div className={styles.item5}>
          <div className={styles.btn}>
            <p>
              {`Купить ${
                currency === 1 ? "USDT" : currency === 2 ? "BTC" : "ETH"
              }`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OffersItem;
