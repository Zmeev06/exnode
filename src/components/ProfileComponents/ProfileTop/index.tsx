import React from "react";
import styles from "./index.module.scss";
import MyIcon from "../../../../assets/profile/myIcon.svg";
import Error from "../../UI/Error";

interface ProfileTopProps {
  name:string
}

const ProfileTop = ({name}: ProfileTopProps) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Профиль</h2>
      <div className={styles.userInfo}>
        <div className={styles.iconWrap}>
          <img src={MyIcon} alt="" />
        </div>
        <div className={styles.info}>
          <h2 className={styles.titleInfo}>{name}</h2>
          <div className={styles.errorWrap}>
            <Error title="Неподтверждённый профиль" />
            <Error title="Email" />
            <Error title="Двухфакторная аутентификация (2FA)" />
          </div>
        </div>
        <div className={styles.lastEntry}>
          <h3 className={styles.lastEntryTitle}>Время последнего входа</h3>
          <h3 className={styles.lastEntryTime}>02.07.2023 23:54:19</h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileTop;
