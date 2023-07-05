import React from "react";
import styles from "./index.module.scss";
import cross from "../../../assets/icons/cross.svg";
const Login = () => {
  return (
    <div className={styles.main}>
      <div className={styles.topBlock}>
        <p className={styles.title}>Авторизация</p>
        <img src={cross} alt="" className={styles.cross} />
      </div>
      <div className={styles.warning}>
        <p className={styles.warningText}>
          Для пользования P2P площадкой необходимо зарегистрировать отдельный
          аккаунт на dcx-p2p.ru
        </p>
      </div>
    </div>
  );
};
export default Login;
