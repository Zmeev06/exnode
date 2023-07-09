import React, { useState } from "react";
import styles from "./index.module.scss";
import arrow from "../../../assets/img/header/arrow.svg";

interface RecentItemAdaptiveProps {
  id: string;
  date: string;
  agent: string;
  status: string;
}

const RecentItemAdaptive = ({
  id,
  date,
  agent,
  status,
}: RecentItemAdaptiveProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${styles.main} ${isOpen && styles.mainActive}`} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.mainBlock}>
        <p>Продажа</p>
        <p>00.00 USDT</p>
        <img
          src={arrow}
          alt=""
          className={`${styles.arrow} ${isOpen && styles.activeArrow}`}
        />
      </div>
      {isOpen && (
        <div className={styles.content}>
          <div className={styles.item}>
            <p>ID</p>
            <p>{id}</p>
          </div>
          <div className={styles.item}>
            <p>Дата</p>
            <p>{date}</p>
          </div>
          <div className={styles.item}>
            <p>Контрагент</p>
            <p>{agent}</p>
          </div>
          <div className={styles.item}>
            <p>Статус</p>
            <p>{status}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default RecentItemAdaptive;
