import React, { useState } from "react";
import styles from "./index.module.scss";
import cross from "../../../assets/icons/cross.svg";
import Input from "../../UI/Input";
import { userLogin } from "../../../services/profileServices";

interface LoginProps {
  setAuthType: (str: string) => void;
  setOpenModal: (openModal: boolean) => void;
  setStatus: (status: boolean) => void;
}

const Login = ({ setAuthType, setOpenModal, setStatus }: LoginProps) => {
  const [email, setEmail] = useState("2015nekitciti@gmail.com");
  const [password, setPassword] = useState("Qwerty1234");
  const [requestStatus, setRequestStatus] = useState();

  const userLoginFunc = async () => {
    const { data, status } = await userLogin(password, email);
    setRequestStatus(status);
    status && localStorage.setItem("token", data.token);
    status && setStatus(true);
  };
  return (
    <div className={styles.root}>
      <div className={styles.topBlock}>
        <p className={styles.title}>Авторизация</p>
        <img
          src={cross}
          alt=""
          className={styles.cross}
          onClick={() => setOpenModal(false)}
        />
      </div>
      <div className={styles.warning}>
        <p className={styles.warningText}>
          Для пользования P2P площадкой необходимо зарегистрировать отдельный
          аккаунт на dcx-p2p.ru
        </p>
      </div>
      <div className={styles.inputBlock}>
        <Input
          value={email}
          setValue={setEmail}
          type="email"
          placeholder="Электронная почта"
        />
        <Input
          value={password}
          setValue={setPassword}
          type="password"
          placeholder="Пароль"
        />
      </div>
      <div className={styles.help}>
        <span className={styles.helpPassword}>Забыли пароль?</span>
      </div>
      <div>
        <button
          className={styles.authBtn}
          onClick={() => {
            userLoginFunc();
            setOpenModal(false);
          }}
        >
          Авторизоваться
        </button>
      </div>
      <div
        className={styles.switchAuth}
        onClick={() => setAuthType("register")}
      >
        Регистрация
      </div>
    </div>
  );
};
export default Login;
