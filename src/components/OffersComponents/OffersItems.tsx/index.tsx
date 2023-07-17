import React from "react";
import styles from "./index.module.scss";
import OffersItem from "../OffersItem";
import { IOfferData } from "../../../interfaces/serviceInterfaces";

interface OffersItemsProps {
  data: IOfferData[];
}

const OffersItems = ({
  data
}: OffersItemsProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.titles}>
        <div className={styles.title1}>Мейкеры</div>
        <div className={styles.title2}>Цена</div>
        <div className={styles.title3}>Доступно/Лимит</div>
        <div className={styles.title4}>Способы оплаты</div>
        <div className={styles.title5}>
          Торгуй
          <div className={styles.titleDecor}>
            <p>без комиссий</p>
          </div>
        </div>
      </div>
      {data.map((item, index) => <OffersItem
        name={item.user.login}
        price={item.price}
        limit_end={item.limit_end}
        limit_start={item.limit_start}
        currency={item.currency}
        id={item.id}
        key={index}
      />)}
      
    </div>
  );
};
export default OffersItems;
