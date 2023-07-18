import React, { ChangeEvent, useState } from "react";
import styles from "./index.module.scss";
import file from "../../../assets/img/payment/file.svg";
import { ReactComponent as Cross } from "../../../assets/icons/cross.svg";
import checked from "../../../assets/img/payment/checked.svg";
import { addMessageImg } from "../../../services/paymentService";

interface ConfirmModalProps {
  setIsOpen: (isOpen: boolean) => void;
  setStep: (step: number) => void;
  id: number;
}

const ConfirmModal = ({ setIsOpen, setStep, id }: ConfirmModalProps) => {
  const [checkedInput, setCheckedInput] = useState(false);
  const [photoList, setPhotoList] = useState<string | ArrayBuffer | null>();
  const token = localStorage.getItem("token") || "";

  const sendFile = async () => {
    console.log(photoList)
    const {data } = await addMessageImg(token, photoList, id)
    console.log(data)
  }

  const getBase64 = (file: File) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPhotoList(reader.result)
    };
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      getBase64(file);
    }
  };

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
          Загрузите и отправьте подтверждение оплаты. Загружаемые файлы должны
          быть в формате .jpg; .jpeg или .png.
        </div>
        <div className={styles.imgBlock}>
        <div className={styles.popup__file}>
          <input
            type="file"
            id="fileInput"
            onChange={(e) => {
              handleFileChange(e);
            }}
          />
          <label htmlFor="fileInput">
            <img src={file} alt="" />
            Загрузить
          </label>
        </div>
        {photoList && <p className={styles.fileInfo}>Вы загрузили изображение</p>}
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
              sendFile()
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
