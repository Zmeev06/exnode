import React from "react";
import styles from "./index.module.scss";

const ThirdStepContent = ({}) => {
  return (
    <div className={styles.main}>
      <div className={styles.topBlock}>
        <p>
          Пожалуйста, воздержитесь от использования в примечании любых терминов,
          связанных с криптовалютой, таких как P2P, C2C, BTC и USDT.
        </p>
      </div>
      <div className={styles.bottomBlock}>
        <p>
          Обратите внимание, что согласно Правилам запрещено взимать
          дополнительные комиссии с контрагентов. Если Вы указываете информацию
          о комиссии в примечаниях или автоматические, мы можем навсегда
          заблокировать функцию размещения объявлений для Вашего аккаунта.
        </p>
      </div>
    </div>
  );
};
export default ThirdStepContent;
