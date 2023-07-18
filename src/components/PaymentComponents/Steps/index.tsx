import React from "react";
import styles from "./index.module.scss";

interface StepsProps {
  step: number;
}

const Steps = ({ step }: StepsProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.steps}>
        <div className={styles.stepBlock}>
          <div className={`${styles.numberBlock} ${styles.active}`}>
            <p className={styles.number}>1</p>
          </div>
          <p className={styles.description}>Перевод платежа продавцу</p>
        </div>

        <div className={styles.line}></div>
        <div className={styles.stepBlock}>
          <div
            className={`${styles.numberBlock} ${
              (step === 3 || step === 2) && styles.active
            }`}
          >
            <p className={styles.number}>2</p>
          </div>
          <p className={`${styles.description}  `}>
            Ожидание перевода криптовалюты продавцом
          </p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.stepBlock}>
          <div
            className={`${styles.numberBlock} ${step === 3 && styles.active}`}
          >
            <p className={styles.number}>3</p>
          </div>
          <p className={styles.description}>Завершение сделки</p>
        </div>
      </div>
      {/* <div className={styles.descriptionBlock}>
        <p className={styles.description}>Перевод платежа продавцу</p>
        <p className={`${styles.description}  ${styles.centerNumber}`}>
          Ожидание перевода криптовалюты продавцом
        </p>
        <p className={styles.description}>Завершено</p>
      </div> */}
    </div>
  );
};
export default Steps;
