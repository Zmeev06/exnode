import React from "react";
import styles from "./index.module.scss";
import TextButton from "../../UI/TextButton";

const PaymentMethod = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>Способ(-ы) оплаты для P2P</div>
      <p className={styles.text}>
        Способы оплаты для P2P: при продаже криптовалюты добавленный Вами способ
        оплаты будет показан покупателю в качестве доступного способа для
        совершения платежа. Убедитесь, что имя владельца счета соответствует
        подтвержденному Вами имени на Exnode P2P. Можно добавить до 20 способов
        оплаты.
      </p>
      <TextButton text="Добавить способ оплаты" width={354} />
    </div>
  );
};

export default PaymentMethod;
