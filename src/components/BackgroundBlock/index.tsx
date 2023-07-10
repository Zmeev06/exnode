import React from "react";
import styles from "./index.module.scss";

const BackgroundBlock = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.bg}>
          <div className={styles.textBlock}>
            <p className={styles.title}>Диктуйте свои правила p2p-сделок</p>
            <p className={styles.text}>
              DCX предлагает выгодный курс покупки и продажи USDT без каких-либо
              комиссий
            </p>
          </div>
        </div>
      </div>
      <div className={styles.promotion}>
        <p className={styles.promotionText}>
          Получите 50 ₽ за каждый завершенный ордер
        </p>
      </div>
    </>
  );
};
export default BackgroundBlock;
