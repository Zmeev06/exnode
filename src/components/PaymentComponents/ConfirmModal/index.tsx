import React, { useState } from "react";
import styles from "./index.module.scss";
import file from "../../../assets/img/payment/file.svg";
import { ReactComponent as Cross } from "../../../assets/icons/cross.svg";
import checked from "../../../assets/img/payment/checked.svg";

interface ConfirmModalProps {
  setIsOpen: (isOpen: boolean) => void;
  setStep: (step: number) => void;
}

const ConfirmModal = ({ setIsOpen, setStep }: ConfirmModalProps) => {
  const [checkedInput, setCheckedInput] = useState(false);
  return (
    <div className={styles.popup} onClick={() => setIsOpen(false)}>
      <div className={styles.popup__block} onClick={(e) => e.stopPropagation()}>
        <div className={styles.popup__title}>Подтверждение платежа</div>
        <Cross
          className={styles.popup__close}
          onClick={() => setIsOpen(false)}
        />
        <div className={styles.popup__text}>
          Покиньте платформу DCX-P2P для самостоятельного осуществления
          перевода. Автоматический перевод от Вашего имени невозможен.
        </div>
        <div className={styles.popup__text}>
          <Cross className={styles.popup__subclose} />
          Нажатие кнопки “Перевеодено” без подтверждения оплаты приведет к
          временной блокировки Вашего аккаунта.Мы также оставляем за собой право
          требовать возмещение убытков в случае необходимости
        </div>
        <div className={styles.popup__subtitle}>
          1. Загрузите подтверждение оплаты <span>*</span>
        </div>
        <div className={styles.popup__text}>
          Загрузите и отправьте продавцу минимум одно подтверждение оплаты.
          Загружаемые файлы должны быть в формате .jpg; .jpeg или .png.
        </div>
        <div className={styles.popup__file}>
          <input type="file" id="fileInput" />
          <label htmlFor="fileInput">
            <img src={file} alt="" />
            Загрузить
          </label>
        </div>
        <div className={styles.popup__checboxs}>
          <div className={styles.popup__checbox}>
            <input
              type="checkbox"
              id="checked"
              onChange={(e) => setCheckedInput(e.target.checked)}
            />
            <label htmlFor="checked">
              <img src={checked} alt="" />
            </label>
          </div>
          <span>Я ознакомлен (а) и принимаю информацию выше</span>
        </div>
        <div className={styles.popup__btns}>
          <button
            className={styles.popup__yes}
            onClick={() => {
              checkedInput && setStep(2);
              checkedInput && setIsOpen(false);
            }}
          >
            Подтвердить оплату
          </button>
        </div>
      </div>
    </div>
  );
};
export default ConfirmModal;
