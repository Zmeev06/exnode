import React, { useState } from "react";
import ContentBlock from "../../UI/ContentBlock";
import styles from "./index.module.scss";
// import arrow from "../../../../assets/profile/icons/out.svg";
// import add from "../../../../assets/profile/icons/add.svg";
// import exchange from "../../../../assets/profile/icons/exchange.svg";
import arrow from "../../../assets/icons/profile/balance/1_iconoir_database-export.svg";
import arrow2 from "../../../assets/icons/profile/balance/2_iconoir_database-export.svg";
import add from "../../../assets/icons/profile/balance/3_iconoir_database-export.svg";
import exchange from "../../../assets/icons/profile/balance/4_iconoir_database-export.svg";
import TextButton from "../../UI/TextButton";
import PayInModal from "../../Modals/PayInModal";
import PayOutModal from "../../Modals/PayOutModal";

interface BalanceBlockProps {
  balance: number;
}

const BalanceBlock = ({ balance }: BalanceBlockProps) => {
  const [isOpenPayInModal, setIsOpenPayInModal] = useState(false);
  const [isOpenPayOutModal, setIsOpenPayOutModal] = useState(false);
  const [isOpenNewPayMethod, setIsOpenNewPayMethod] = useState(false);

  return (
    <div className={styles.main}>
      <ContentBlock className={styles.content}>
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
            <img src={arrow} alt="" className={`${styles.img}`} />
            <p className={styles.btnText}>Ввод</p>
          </div>
          <div className={styles.btnBlock}>
            <img src={arrow2} alt="" className={`${styles.img}`} />
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
      <TextButton
        text="Перейти в кошелек"
        width={330}
        className={styles.bottomBtn}
      />
      <PayInModal
        isOpenModal={isOpenPayInModal}
        setIsOpenModal={setIsOpenPayInModal}
      />
      <PayOutModal
        isOpenModal={isOpenPayOutModal}
        setIsOpenModal={setIsOpenPayOutModal}
      />
    </div>
  );
};

export default BalanceBlock;
