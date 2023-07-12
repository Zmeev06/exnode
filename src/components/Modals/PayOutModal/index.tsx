import React from "react";
import styles from "./index.module.scss";

interface PayOutModalProps {
  isOpenModal: boolean;
  setIsOpenModal: (isOpenModal: boolean) => void;
}

const PayOutModal = ({ isOpenModal, setIsOpenModal }: PayOutModalProps) => {
  return (
    <>
      {isOpenModal && (
        <>
          <div>
            <h2>PayOutModal</h2>
          </div>
          {/* ниже пример закрытия модалки */}
          {/* <button onClick={() => setIsOpenModal(false)}>закрыть</button> */}
        </>
      )}
    </>
  );
};

export default PayOutModal;
