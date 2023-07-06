import ContentBlock from "../../UI/ContentBlock";
import styles from "./index.module.scss";
import arrow from "../../../../assets/profile/icons/out.svg";
import add from "../../../../assets/profile/icons/add.svg";
import exchange from "../../../../assets/profile/icons/exchange.svg";
import TextButton from "../../UI/TextButton";

interface BalanceBlockProps {
  balance: number
}

const BalanceBlock = ({balance}: BalanceBlockProps) => {
  return (
    <div>
      <ContentBlock>
        <div className={styles.topBlock}>
          <div className={styles.balanceInfo}>
            <p className={styles.generalText}>Общий баланс</p>
          </div>
          <p className={styles.generalExnode}>Exnode P2P</p>
        </div>
        <div className={styles.mainBalance}>
          <p className={styles.balanceText}>≈ {balance}</p>
          <p className={styles.currency}>USDT</p>
        </div>
        <div className={styles.infoBlock}>
          <p className={styles.available}>Доступно: 0.00 USDT</p>
          <p className={styles.frozen}>Заморожено: 0.00 USDT</p>
        </div>
        <div className={styles.btnsBlock}>
          <div className={styles.btnBlock}>
            <img
              src={arrow}
              alt=""
              className={`${styles.outArrow} ${styles.img}`}
            />
            <p className={styles.btnText}>Ввод</p>
          </div>
          <div className={styles.btnBlock}>
            <img
              src={arrow}
              alt=""
              className={`${styles.inArrow} ${styles.img}`}
            />
            <p className={styles.btnText}>Вывод</p>
          </div>
          <div className={styles.btnBlock}>
            <img
              src={add}
              alt=""
              className={`${styles.buyImg} ${styles.img}`}
            />
            <p className={styles.btnText}>Купить</p>
          </div>
          <div className={styles.btnBlock}>
            <img
              src={exchange}
              alt=""
              className={`${styles.sellImg} ${styles.img}`}
            />
            <p className={styles.btnText}>Продать</p>
          </div>
        </div>
      </ContentBlock>
      <TextButton text="Перейти в кошелек" width={330} className={styles.bottomBtn}/>
    </div>
  );
};

export default BalanceBlock;
