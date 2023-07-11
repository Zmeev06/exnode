import React from "react";
import styles from "./index.module.scss";
import ContentBlock from "../../UI/ContentBlock";

interface SecondStepContentProps {
  limit: number;
  setLimit: (limit: number) => void;
  limitStart: number;
  setLimitStart: (limitStart: number) => void;
  limitEnd: number;
  setLimitEnd: (limitEnd: number) => void;
  setPaymentMethod: (paymentMethod:number) => void;
}

const SecondStepContent = ({limit, setLimit, setLimitEnd, setLimitStart, limitEnd, limitStart, setPaymentMethod}: SecondStepContentProps) => {
  return (
    <div className={styles.main}>
      <ContentBlock>
        <p className={styles.title}>Общая сумма</p>
        <div className={styles.mainInputBlock}>
          <input placeholder="0" className={styles.mainInput} value={limit} onChange={e => setLimit(+e.target.value)}/>
          <p className={styles.mainLabel}>USDTTRC</p>
        </div>
        <p className={styles.title}>Лимиты</p>
        <div className={styles.limits}>
          <div className={styles.inputBlock}>
            <input placeholder="0" className={styles.input} value={limitStart} onChange={e => setLimitStart(+e.target.value)}/>
            <p className={styles.currency}>RUB</p>
          </div>
          <p>~</p>
          <div className={styles.inputBlock}>
            <input placeholder="0" className={styles.input} value={limitEnd} onChange={e => setLimitEnd(+e.target.value)} />
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
        <select className={styles.select} onChange={e => setPaymentMethod(+e.target.value)}>
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
