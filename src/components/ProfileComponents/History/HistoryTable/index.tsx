import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import ContentBlock from "../../../UI/ContentBlock";
import HistoryTableItem from "./HistoryTableItem";
import { getHistory } from "../../../../services/profileServices";

const HistoryTable = () => {
  const [history, setHistory] = useState<any[]>();
  const token = localStorage.getItem("token")?.replace(/"/g, "") || "";
  const getHistoryData = async () => {
    const { data } = await getHistory(token);
    setHistory(data);
  };
  useEffect(() => {
    getHistoryData();
  }, []);
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
      <div>{history && history.map((el) => <HistoryTableItem {...el} />)}</div>
    </ContentBlock>
  );
};

export default HistoryTable;
