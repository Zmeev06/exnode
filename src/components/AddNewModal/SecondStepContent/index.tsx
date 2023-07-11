import React from "react";
import styles from "./index.module.scss";
import ContentBlock from "../../UI/ContentBlock";

const SecondStepContent = () => {
  return (
    <div className={styles.main}>
      <ContentBlock>
        <p className={styles.title}>Общая сумма</p>
        <div className={styles.mainInputBlock}>
          <input placeholder="0" className={styles.mainInput} />
          <p className={styles.mainLabel}>USDTTRC</p>
        </div>
        <p className={styles.title}>Лимиты</p>
        <div className={styles.limits}>
          <div className={styles.inputBlock}>
            <input placeholder="0" className={styles.input} />
            <p className={styles.currency}>RUB</p>
          </div>
          <p>~</p>
          <div className={styles.inputBlock}>
            <input placeholder="0" className={styles.input} />
            <p className={styles.currency2}>RUB</p>
          </div>
        </div>
        <div className={styles.counterBlock}>
          <div className={styles.limitBlock}>
            <p>Мин.</p>
            <p className={styles.counter}>1000</p>
          </div>
          <div className={styles.limitBlock}>
            <p>Макс:</p>
            <p className={styles.counter}>1000</p>
          </div>
        </div>
      </ContentBlock>
      <ContentBlock>
        <p className={styles.title}>Способ оплаты</p>
        <p className={styles.subTitle}>Выберите до 5 методов оплаты</p>
        <select className={styles.select}>
          <option value={1}>Тинькофф</option>
          <option value={2}>Сбербанк</option>
          <option value={3}>Райффайзен</option>
          <option value={4}>АльфаБанк</option>
          <option value={5}>Qiwi</option>
          <option value={6}>Наличные RUB</option>
        </select>
        <p className={styles.title}>Срок оплаты 15 минут</p>
      </ContentBlock>
    </div>
  );
};
export default SecondStepContent;
