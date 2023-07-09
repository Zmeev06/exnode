import React, { useState } from "react";
import styles from "./index.module.scss";
import RecentItemAdaptive from "../RecentItemAdaptive";
import ContentBlock from "../../UI/ContentBlock";

const RecentTransactionsAdaptive = ({}) => {
  const [transactions, setTransactions] = useState([
    {
      id: "00000000",
      date: "06.07.2023",
      agent: "_UMBRELLA_",
      status: "Отменена",
    },
  ]);
  return (
    <ContentBlock className={styles.main}>
      <p className={styles.title}>Последние операции</p>
      <div className={styles.content}>
        {transactions.map((item, index) => (
          <RecentItemAdaptive
            id={item.id}
            agent={item.agent}
            date={item.date}
            status={item.status}
            key={index}
          />
        ))}
      </div>
    </ContentBlock>
  );
};
export default RecentTransactionsAdaptive;
