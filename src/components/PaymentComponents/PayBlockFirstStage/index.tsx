import React from "react";
import styles from "./index.module.scss";
import PayBlock from "../../UI/PayBlock";
import { ReactComponent as Cross } from '../../../assets/icons/cross.svg';
import file from '../../../assets/img/payment/file.svg';
import checked from '../../../assets/img/payment/checked.svg';
// import ContentBlock from "../../UI/ContentBlock";
// import TextButton from "../../UI/TextButton";

interface PayBlockFirstStageProps {
  sum: string;
  price: string;
  requisites: string;
  paymentMethod: number;
}

const PayBlockFirstStage = ({
  sum,
  price,
  requisites,
  paymentMethod,
}: PayBlockFirstStageProps) => {
  return (
    <PayBlock
      header="Подтвердитеeeee информацию об ордере"
      sum={sum}
      priceRub={price}
      priceUSDT={price}
    >
      <p className={styles.title}>
        Переведите средства на счет продавца по реквизитам
      </p>
      <div className={styles.requisites}>
        <div className={styles.payMethod}>
          <p className={styles.payMethodText}>Tinkoff</p>
        </div>
        <div className={styles.saller}>
          <div className={styles.sallerInfo}>
            <p className={styles.sallerTitle}>Контрагент</p>
            {/* Имя контрагента */}
            <p className={styles.sallerText}>{requisites}</p>
          </div>
          <div className={styles.sallerInfo}>
            <p className={styles.sallerTitle}>Номер карты</p>
            <p className={styles.sallerText}>{requisites}</p>
          </div>
        </div>
      </div>
      <div className={styles.popup}>
        <div className={styles.popup__block}>
          <div className={styles.popup__title}>
            Подтверждение платежа
          </div>
          <Cross className={styles.popup__close} />
          <div className={styles.popup__text}>
            Покиньте платформу DCX-P2P для самостоятельного осуществления перевода. Автоматический перевод от Вашего имени невозможен.
          </div>
          <div className={styles.popup__text}>
            <Cross className={styles.popup__subclose} />Нажатие кнопки “Перевеодено” без подтверждения оплаты приведет к временной блокировки Вашего аккаунта.Мы также оставляем за собой право требовать возмещение убытков в случае необходимости
          </div>
          <div className={styles.popup__subtitle}>1. Загрузите подтверждение оплаты <span>*</span></div>
          <div className={styles.popup__text}>
            Загрузите и отправьте продавцу минимум одно подтверждение оплаты. Загружаемые файлы должны быть в формате .jpg; .jpeg или .png.
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
              <input type="checkbox" id='checked' />
              <label htmlFor='checked'><img src={checked} alt="" /></label>
            </div>
            <span>Я ознакомлен (а) и принимаю информацию выше</span>
          </div>

          <div className={styles.popup__btns}>
            <button className={styles.popup__yes}>
              Подтвердить оплату
            </button>
          </div>
        </div>
      </div>
      <div className={styles.popup__cancel}>
        <div className={styles.popup__block}>
          <div className={styles.popup__title}>
            Отмена сделки
          </div>
          <Cross className={styles.popup__close} />
          <div className={styles.popup__checboxs}>
            <div className={styles.popup__checbox}>
              <input type="checkbox" id='checked1' />
              <label htmlFor='checked1'><img src={checked} alt="" /></label>
            </div>
            <span>Я не оплачивал сделку / продавец согласен на возврат денежных средств</span>
          </div>
          <div className={styles.popup__btns}>
            <button className={styles.popup__yes}>
              Отменить сделку
            </button>
          </div>
        </div>
      </div>
      <div className={styles.btnsBlock}>
        <div className={styles.btn}>
          <p className={styles.btnText}>Я оплатил</p>
        </div>
        <div className={styles.resetBlock}>
          <p className={styles.reset}>Отменить сделку</p>
        </div>
      </div>
    </PayBlock>
  );
};
export default PayBlockFirstStage;
