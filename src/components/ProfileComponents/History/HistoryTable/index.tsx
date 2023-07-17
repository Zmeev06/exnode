import React from "react";
import styles from "./index.module.scss";
import ContentBlock from "../../../UI/ContentBlock";
import { ReactComponent as Copy } from "../../../../assets/icons/copy.svg";

const HistoryTable = () => {
  return (
    <ContentBlock className={styles.main}>
      <div className={styles.filters}>
        <p className={styles.filterItem}>Валюта</p>
        <p className={styles.filterItem}>Сумма в фиате</p>
        <p className={styles.filterItem}>Курс</p>
        <p className={styles.filterItem}>Сумма в криптовалюте</p>
        <p className={styles.filterItem}>Дата</p>
        <p className={styles.filterItem}>Контрагент</p>
        <p className={styles.filterItem}>Статус</p>
        <p className={styles.filterItem}>Операции</p>
      </div>
      <div className={styles.itemBlock}>
        <div className={styles.item}>
          <h4 className={styles.saleTitle}>Продажа</h4>
          <span className={styles.saleId}>00000000</span>
        </div>
        <p className={styles.item}>5,000.00 RUB</p>
        <p className={styles.item}>00.00</p>
        <p className={styles.item}>55.05 USDT</p>
        <p className={styles.item}>04.07.2023 00:23:35</p>
        <p className={styles.item}>_UMBRELLA_</p>
        <p className={styles.item}>Отменена</p>
        {/* <div className={`${styles.item} ${styles.operations}`}> */}
        <div className={styles.operations}>
          <div className={styles.operationsTop}>
            <span>00000000</span> <Copy />
          </div>
          <button className={styles.operationsBtn}>К деталям</button>
        </div>
      </div>
    </ContentBlock>
  );
};

export default HistoryTable;
