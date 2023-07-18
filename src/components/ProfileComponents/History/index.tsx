import React, { useState } from "react";
import styles from "./index.module.scss";
import HistoryTable from "./HistoryTable";

const navItems = [
  {
    id: 0,
    title: "Мои сделки",
  },
  {
    id: 1,
    title: "Мои объявления",
  },
  {
    id: 2,
    title: "Ввод",
  },
  {
    id: 3,
    title: "Вывод",
  },
];

const History = () => {
  const [activeNavItem, setActiveNavItem] = useState(0);

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>История</h1>
      <div className={styles.nav}>
        <div className={styles.navLeft}>
          {navItems.map((el, index) => (
            <span
              onClick={() => setActiveNavItem(index)}
              className={`${styles.navItem} ${
                activeNavItem === index ? styles.navItemActive : ""
              }`}
              key={el.id}
            >
              {el.title}
            </span>
          ))}
        </div>
        <div onClick={() => setActiveNavItem(1000)} className={styles.navRight}>
          <span>Выгрузить всю историю</span>
        </div>
      </div>
      <HistoryTable />
    </div>
  );
};

export default History;
