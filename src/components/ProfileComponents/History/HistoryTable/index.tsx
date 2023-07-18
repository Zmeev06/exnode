import React, { useState } from "react";
import styles from "./index.module.scss";
import ContentBlock from "../../../UI/ContentBlock";
import { ReactComponent as Copy } from "../../../../assets/icons/copy.svg";
import { ReactComponent as RollUp } from "../../../../assets/icons/FAQs/Button.svg";
import HistoryTableItem from "./HistoryTableItem";

const data = [
  {
    type: "Продажа",
    id: "00000000",
    sum: "5,000.00 RUB",
    course: "00.00",
    courseInCrypt: "55.05 USDT",
    date: "04.07.2023 00:23:35",
    counterparty: "_UMBRELLA_",
    status: "Отменена",
    operations: "00000000",
  },
  {
    type: "Продажа",
    id: "00000000",
    sum: "5,000.00 RUB",
    course: "00.00",
    courseInCrypt: "55.05 USDT",
    date: "04.07.2023 00:23:35",
    counterparty: "_UMBRELLA_",
    status: "Равершена",
    operations: "00000000",
  },
  {
    type: "Продажа",
    id: "00000000",
    sum: "5,000.00 RUB",
    course: "00.00",
    courseInCrypt: "55.05 USDT",
    date: "04.07.2023 00:23:35",
    counterparty: "_UMBRELLA_",
    status: "Отменена",
    operations: "00000000",
  },
];

const HistoryTable = () => {
  return (
    <ContentBlock className={styles.main}>
      <div className={styles.filter}>
        <p className={styles.filterItem}>Валюта</p>
        <p className={styles.filterItem}>Сумма в фиате</p>
        <p className={styles.filterItem}>Курс</p>
        <p className={styles.filterItem}>Сумма в криптовалюте</p>
        <p className={styles.filterItem}>Дата</p>
        <p className={styles.filterItem}>Контрагент</p>
        <p className={styles.filterItem}>Статус</p>
        <p className={styles.filterItem}>Операции</p>
      </div>
      <div>
        {data.map((el) => (
          <HistoryTableItem {...el} />
        ))}
      </div>
    </ContentBlock>
  );
};

export default HistoryTable;
