import React, { useState } from "react";
import styles from "./index.module.scss";
import { ReactComponent as Cross } from "../../../assets/icons/cross.svg";
import checked from "../../../assets/img/payment/checked.svg";
import { useNavigate } from "react-router-dom";

interface CancelModalProps {
  setIsOpen: (isOpen: boolean) => void;
}
const CancelModal = ({ setIsOpen }: CancelModalProps) => {
  const [checkedInput, setCheckedInput] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={styles.popup__cancel} onClick={() => setIsOpen(false)}>
      <div className={styles.popup__block} onClick={(e) => e.stopPropagation()}>
        <div className={styles.popup__title}>Отмена сделки</div>
        <Cross
          className={styles.popup__close}
          onClick={() => setIsOpen(false)}
        />
        <div className={styles.popup__checboxs}>
          <div className={styles.popup__checbox}>
            <input
              type="checkbox"
              id="checked1"
              onChange={(e) => setCheckedInput(e.target.checked)}
            />
            <label htmlFor="checked1">
              <img src={checked} alt="" />
            </label>
          </div>
          <span>
            Я не оплачивал сделку / продавец согласен на возврат денежных
            средств
          </span>
        </div>
        <div className={styles.popup__btns}>
          <button
            className={styles.popup__yes}
            onClick={() => {
              checkedInput && setIsOpen(false);
              checkedInput && navigate("/");
            }}
          >
            Отменить сделку
          </button>
        </div>
      </div>
    </div>
  );
};
export default CancelModal;