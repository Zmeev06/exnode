import React from "react";
import styles from "./index.module.scss";
import PayBlock from "../../UI/PayBlock";

// import ContentBlock from "../../UI/ContentBlock";
// import TextButton from "../../UI/TextButton";

interface PayBlockFirstStageProps {
  sum: string;
  price: string;
  requisites: string;
  paymentMethod: number;
}

const PayBlockFirstStage = ({
  sum,
  price,
  requisites,
  paymentMethod,
}: PayBlockFirstStageProps) => {
  return (
    <PayBlock
      header="Подтвердитеeeee информацию об ордере"
      sum={sum}
      priceRub={price}
      priceUSDT={price}
    >
      <p className={styles.title}>
        Переведите средства на счет продавца указанный ниже
      </p>
      <div className={styles.requisites}>
        <div className={styles.payMethod}>
          <p className={styles.payMethodText}>Tinkoff</p>
        </div>
        <div className={styles.saller}>
          {/* <div className={styles.sallerInfo}>
            <p className={styles.sallerTitle}>Фамилия Имя</p>
            <p className={styles.sallerText}>Иванов Иван Иванович</p>
          </div> */}
          <div className={styles.sallerInfo}>
            <p className={styles.sallerTitle}>Реквизиты</p>
            <p className={styles.sallerText}>{requisites}</p>
          </div>
        </div>
      </div>
      <div className={styles.btnsBlock}>
        <div className={styles.btn}>
          <p className={styles.btnText}>Оплачено</p>
        </div>
        <div className={styles.resetBlock}>
          <p className={styles.reset}>Отменить ордер</p>
        </div>
      </div>
    </PayBlock>
  );
};
export default PayBlockFirstStage;
