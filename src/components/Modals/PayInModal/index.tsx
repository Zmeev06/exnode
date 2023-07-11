import React from "react";
import styles from "./index.module.scss";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

interface PayInModalProps {
  isOpenModal: boolean;
  setIsOpenModal: (isOpenModal: boolean) => void;
}

const PayInModal = ({ isOpenModal, setIsOpenModal }: PayInModalProps) => {
  return (
    <>
      {isOpenModal && (
        <>
          <div className="popupIn">
            <div className="popupIn__block">
              <div className="popupIn__title"></div>
              <div className="popupIn__warning"></div>
              <div className="popupIn__info"></div>
              <div className="popupIn__text"></div>
              <Select options={options} />
            </div>
          </div>
          {/* ниже пример закрытия модалки */}
          {/* <button onClick={() => setIsOpenModal(false)}>закрыть</button> */}
        </>
      )}
    </>
  );
};

export default PayInModal;
