import React, { useState } from "react";
import styles from "./index.module.scss";
import Select from "react-select";
import { ReactComponent as Cross } from "../../../assets/icons/cross.svg";
import { addPayMethod } from "../../../services/paymentService";

interface NewPayMethodProps {
  setIsOpenModal: (isOpenModal: boolean) => void;
}
const options = [
  { value: "1", label: "Сбербанк" },
  { value: "2", label: "Тинькофф" },
  { value: "3", label: "Райффайзен" },
  { value: "4", label: "АльфаБанк" },
  { value: "5", label: "Qiwi" },
];

const NewPayMethod = ({ setIsOpenModal }: NewPayMethodProps) => {
  const token = localStorage.getItem("token")?.replace(/"/g, "") || "";
    const [title, setTitle] = useState('second')
  const addMethod = async () => {
    const {data} = await addPayMethod(token, title)
    console.log(data)
  }
  return (
    <div className={styles.popupIn} onClick={() => setIsOpenModal(false)}>
      <div
        className={styles.popupIn__block}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.popupIn__title}>Новый способ оплаты</div>
        <Cross
          className={styles.popupIn__close}
          onClick={() => setIsOpenModal(false)}
        />

        <div className={styles.popupIn__text}>Банк</div>
        <Select
          options={options}
          placeholder="Все"
          className="react-select-container"
          classNamePrefix="react-select"
          onChange={(e) => setTitle(e?.value || '')}
        />
        <div className={styles.popupIn__text}>№ карты</div>
        <div className={styles.popupIn__input}>
          <input type="text" placeholder="____ ____ ____ ____" />
        </div>
        <div className={styles.popupIn__btn} onClick={() => {
          addMethod()
          setIsOpenModal(false)
          }}>Добавить способ оплаты</div>
      </div>
    </div>
  );
};

export default NewPayMethod;
