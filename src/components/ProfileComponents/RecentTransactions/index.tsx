import ContentBlock from "../../UI/ContentBlock";
import styles from "./index.module.scss";

const RecentTransactions = () => {
  return (
    <ContentBlock className={styles.main}>
      <p className={styles.title}>Последние операции</p>
      <div className={styles.filters}>
        <p className={styles.filterItem1}>ID операции</p>
        <p className={styles.filterItem}>Тип</p>
        <p className={styles.filterItem}>Сумма</p>
        <p className={styles.filterItem}>Дата</p>
        <p className={styles.filterItem}>Контрагент</p>
        <p className={styles.filterItem6}>Статус</p>
      </div>
      <div className={styles.itemBlock}>
        <p className={styles.item1}>1D3CBC20</p>
        <p className={styles.item}>Продажа</p>
        <p className={styles.item}>
          6.91 <span>USDT</span>
        </p>
        <p className={styles.item}>03.07.2023</p>
        <p className={styles.item}>snowy-voice</p>
        <p className={styles.item6}>Отменена</p>
      </div>
    </ContentBlock>
  );
};
export default RecentTransactions;
