import React from "react";
import styles from "./index.module.scss";
import cross from "../../../assets/icons/cross.svg";
import Input from "../../UI/Input";
import Checkbox from "../../UI/Checkbox";

interface LoginProps {
  setAuthType: (str: string) => void;
}

const Login = ({ setAuthType }: LoginProps) => {
  return (
    <div className={styles.root}>
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
      <div className={styles.inputBlock}>
        <Input type="email" placeholder="Электронная почта" />
        <Input type="password" placeholder="Пароль" />
      </div>
      <div className={styles.help}>
        <Checkbox text="Запомнить меня" className={styles.checkbox} />
        <span className={styles.helpPassword}>Забыли пароль?</span>
      </div>
    </div>
  );
};
export default Login;
