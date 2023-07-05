import React from "react";
import styles from "./index.module.scss";
import Container from "../UI/Container";

const P2PInfo = () => {
  return (
    <Container>
      <div className={styles.root}>
        <h2 className={styles.title}>Преимущества P2P платформы</h2>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <h3 className={styles.gridTitle}>Стоимость</h3>
            <p className={styles.gridText}>
              У вас есть возможность определить желаемую цену при покупке или
              продаже криптовалюты
            </p>
          </div>
          <div className={`${styles.gridItem} ${styles.commissions}`}>
            <h3 className={styles.gridTitle}>Комиссии</h3>
            <p className={styles.gridText}>
              На нашем сервисе нет скрытых платежей. Мы взимаем комиссию
              с создателя предложения только в размере 0,2%, а комиссия сети —
              единственная плата за вывод криптовалюты
            </p>
          </div>
          <div className={styles.gridItem}>
            <h3 className={styles.gridTitle}>Безопасность</h3>
            <p className={styles.gridText}>
              Наша команда способствует честным и надежным сделкам между
              контрагентами.
            </p>
          </div>
          <div className={styles.gridItem}>
            <h3 className={styles.gridTitle}>Способы оплаты</h3>
            <p className={styles.gridText}>
              Мы обеспечиваем поддержку широкого спектра популярных способов
              оплаты и постоянно обновляем список новыми вариантами
            </p>
          </div>
          <div className={styles.gridItem}>
            <h3 className={styles.gridTitle}>Конфиденциальность</h3>
            <p className={styles.gridText}>
              В отличие от банковских переводов, платформы P2P не собирают
              никакой информации о покупателе и продавце
            </p>
          </div>
          <div className={styles.gridItem}>
            <h3 className={styles.gridTitle}>Лёгкий старт</h3>
            <p className={styles.gridText}>
              После того, как вы успешно завершили процесс KYC транзакции
              выполняют три простых шага. Весь процесс обычно занимает от 5 до
              10 минут.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default P2PInfo;
