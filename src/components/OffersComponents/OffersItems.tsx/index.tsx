import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import OffersItem from "../OffersItem";
import { IOfferData } from "../../../interfaces/serviceInterfaces";
import { getProfile } from "../../../services/profileServices";

interface OffersItemsProps {
  data: IOfferData[];
}

const OffersItems = ({ data }: OffersItemsProps) => {
  const [status, setStatus] = useState(false);
  const token = localStorage.getItem("token")?.replace(/"/g, "") || "";

  const getProfileFunc = async () => {
    const { data } = await getProfile(token);
    data !== "isError" && setStatus(true);
  };
  useEffect(() => {
    getProfileFunc();
  });
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
      <div className={styles.content}>
        {data.map((item, index) => (
          <OffersItem
            name={item.user.login}
            price={item.price}
            limit_end={item.limit_end}
            limit_start={item.limit_start}
            currency={item.currency}
            id={item.id}
            paymentMethod={item.payment_method}
            key={index}
            status={status}
            setStatus={setStatus}
          />  
        ))}
      </div>
    </div>
  );
};
export default OffersItems;