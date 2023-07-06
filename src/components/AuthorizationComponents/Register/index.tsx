import React, { useState } from "react";
import styles from "./index.module.scss";
import cross from "../../../assets/icons/cross.svg";
import Input from "../../UI/Input";
import { v4 } from "uuid";

interface RegisterProps {
  setAuthType: (str: string) => void;
}

const Register = ({ setAuthType }: RegisterProps) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.root}>
      <div className={styles.topBlock}>
        <p className={styles.title}>Регистрация</p>
        <img src={cross} alt="" className={styles.cross} />
      </div>
      <div className={styles.warning}>
        <p className={styles.warningText}>
          Для пользования P2P площадкой необходимо зарегистрировать отдельный
          аккаунт на dcx-p2p.ru
        </p>
      </div>
      <div className={styles.inputBlock}>
        <Input
          value={login}
          setValue={setLogin}
          type="text"
          placeholder="Логин"
        />
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
        <span
          onClick={() => setPassword(v4())}
          className={styles.helpGeneratePassword}
        >
          Сгенерировать надежный пароль
        </span>
      </div>
      <div>
        <button className={styles.authBtn}>Регистрация</button>
      </div>
      <div className={styles.switchAuth}>Авторизоваться</div>
    </div>
  );
};
export default Register;
