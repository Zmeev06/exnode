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
          <div>
            <RollUp className={`${isVisible && styles.blockItemBtn}`} />
          </div>
        </div>
        {/* <p
          className={`${styles.blockItemText} ${
            isVisible && styles.blockItemTextVisible
          }`}
        >
          ddd
        </p> */}
        <div
          className={`${styles.blockItemBody} ${
            isVisible && styles.blockItemBodyVisible
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit
          pariatur, nesciunt quam alias repellendus quidem quia ducimus ipsa
          earum.
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
