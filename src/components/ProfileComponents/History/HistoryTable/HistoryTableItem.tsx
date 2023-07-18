import React, { useState } from "react";
import styles from "./index.module.scss";

import { ReactComponent as Copy } from "../../../../assets/icons/copy.svg";
import { ReactComponent as RollUp } from "../../../../assets/icons/FAQs/Button.svg";

interface HistoryTableItemProps {
  type: string;
  id: string;
  sum: string;
  course: string;
  courseInCrypt: string;
  date: string;
  counterparty: string;
  status: string;
  operations: string;
}

const HistoryTableItem = ({
  type,
  id,
  sum,
  course,
  courseInCrypt,
  date,
  counterparty,
  status,
  operations,
}: HistoryTableItemProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className={styles.blockItem}>
        <div
          onClick={() => setIsVisible((prev) => !prev)}
          className={styles.blockItemTop}
        >
          <div className={styles.item}>
            <h4 className={styles.saleTitle}>{type}</h4>
            <span className={styles.saleId}>{id}</span>
          </div>
          <div className={styles.blockItemTopCenter}>
            <span>{courseInCrypt}</span>
          </div>
          <div>
            <RollUp className={`${isVisible && styles.blockItemBtn}`} />
          </div>
        </div>
        <div
          className={`${styles.blockItemBody} ${
            isVisible && styles.blockItemBodyVisible
          }`}
        >
          <div className={styles.blockItemBodyRow}>
            <span className={styles.blockItemBodyRowLeft}>Сумма в фиате</span>
            <span className={styles.blockItemBodyRowRight}>{sum}</span>
          </div>
          <div className={styles.blockItemBodyRow}>
            <span className={styles.blockItemBodyRowLeft}>Курс</span>
            <span className={styles.blockItemBodyRowRight}>{course}</span>
          </div>
          <div className={styles.blockItemBodyRow}>
            <span className={styles.blockItemBodyRowLeft}>Дата</span>
            <span className={styles.blockItemBodyRowRight}>{date}</span>
          </div>
          <div className={styles.blockItemBodyRow}>
            <span className={styles.blockItemBodyRowLeft}>Контрагент</span>
            <span className={styles.blockItemBodyRowRight}>{counterparty}</span>
          </div>
          <div className={styles.blockItemBodyRow}>
            <span className={styles.blockItemBodyRowLeft}>Статус</span>
            <span className={styles.blockItemBodyRowRight}>{status}</span>
          </div>
          <div>
            <div className={styles.blockItemBodyRowOperationsTop}>
              <span>{operations}</span> <Copy />
            </div>
            <button className={styles.operationsBtn}>К деталям</button>
          </div>
        </div>
      </div>

      <div className={styles.itemBlock}>
        <div className={styles.item}>
          <h4 className={styles.saleTitle}>{type}</h4>
          <span className={styles.saleId}>{id}</span>
        </div>
        <p className={styles.item}>{sum}</p>
        <p className={styles.item}>{course}</p>
        <p className={styles.item}>{courseInCrypt}</p>
        <p className={styles.item}>{date}</p>
        <p className={styles.item}>{counterparty}</p>
        <p className={styles.item}>{status}</p>
        <div className={`${styles.item} ${styles.operations}`}>
          <div className={styles.operationsTop}>
            <span>{operations}</span> <Copy />
          </div>
          <button className={styles.operationsBtn}>К деталям</button>
        </div>
      </div>
    </>
  );
};

export default HistoryTableItem;
