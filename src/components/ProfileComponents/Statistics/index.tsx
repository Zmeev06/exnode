import React from "react";
import styles from "./index.module.scss";
import ContentBlock from "../../UI/ContentBlock";
import StatisticsItem from "../StatisticsItem";

const data = [
  {
    title: "Ордера за 30 дней",
    body: "0 раз (-а)",
  },
  {
    title: "Выполненных заказов за 30д (%)",
    body: "0%",
  },
  {
    title: "Средн. время перевода",
    body: "0.00 минут (-ы)",
  },
  {
    title: "Средн. время ответа",
    body: "0.00 минут (-ы)",
  },
  {
    title: "Отзывы",
    body: "100% (0)",
  },
  {
    title: "Положительные",
    body: "0",
  },
  {
    title: "Негативные",
    body: "0",
  },
  {
    title: "Зарегистрирован",
    body: "9 дней назад",
  },
  {
    title: "Первая сделка",
    body: "0 дней назад",
  },
  {
    title: "Все сделки",
    body: "0 раз (-а)",
  },
  {
    title: "Прим. объем за 30 дней",
    body: "0.00 USDT",
  },
  {
    title: "Прим. общий объем",
    body: "0.00 USDT",
  },
];

const Statistics = () => {
  return (
    <ContentBlock className={styles.main}>
      <h2 className={styles.title}>Статистика</h2>
      <div className={styles.gridContainer}>
        {data.map((el, index) => (
          <StatisticsItem title={el.title} body={el.body} key={index} />
        ))}
      </div>
    </ContentBlock>
  );
};

export default Statistics;
