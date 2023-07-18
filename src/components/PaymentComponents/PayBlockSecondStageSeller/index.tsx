import React from 'react'
import styles from './index.module.scss';
import PayBlock from "../../UI/PayBlock";
import tin from '../../../assets/img/payment/tin.png';
import qiwi from '../../../assets/img/payment/qiwi.png';
import check from '../../../assets/img/payment/check.svg';
import { ReactComponent as Cross } from '../../../assets/icons/cross.svg';
import warning from '../../../assets/img/payment/warning.svg';
import checked from '../../../assets/img/payment/checked.svg';
const checkboxs = 'true';
const PayBlockSecondStageSeller = () => {
    return (
        <PayBlock
            header="Подтвердитеeeee информацию об ордере"
            sum='100'
            priceRub='100'
            priceUSDT='100'
        >
            {/* 1 ШАГ ПРОДАВЦА */}
            <p className={styles.title}>
                Переведите средства на счет продавца указанный ниже
            </p>
            <div className={styles.way}>
                <div className={styles.way__checkboxs}>
                    <div className={styles.way__checkbox}>
                        <div className={styles.way__mainCircle}>
                            {checkboxs === 'true' && <div className={styles.way__circle}></div>}
                        </div>
                        <img src={tin} alt="" />
                        Тинькофф
                    </div>
                    <div className={styles.way__checkbox}>
                        <div className={styles.way__mainCircle}>
                            {checkboxs === 'true' && <div className={styles.way__circle}></div>}
                        </div>
                        <img src={qiwi} alt="" />
                        Qiwi
                    </div>
                </div>
                <div className={styles["way-card"]}>
                    <div className={styles["way-card__title"]}>
                        Номер карты
                    </div>
                    <div className={styles["way-card__num"]}>
                        0000 0000 0000 0000
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.333 2.5H3.33301V13.3333" stroke="#6522D9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.66602 5.83301H16.666V15.833C16.666 16.275 16.4904 16.699 16.1779 17.0115C15.8653 17.3241 15.4414 17.4997 14.9993 17.4997H8.33268C7.89065 17.4997 7.46673 17.3241 7.15417 17.0115C6.84161 16.699 6.66602 16.275 6.66602 15.833V5.83301Z" stroke="#6522D9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className={styles.popupConfirmation}>
                <div className={styles.popupConfirmation__block}>
                    <div className={styles.popupConfirmation__title}>
                        Подтверждение платежа
                    </div>
                    <Cross className={styles.popupConfirmation__close} />
                    <div className={styles.popupConfirmation__warning}>
                        <img src={warning} alt="" /> Внимание!!!
                    </div>
                    <div className={styles.popupConfirmation__text}>
                        Проверьте баланс Вашего банковского счета или электронного кошелька и подтвердите получение денежных средств на «Доступный баланс».
                    </div>
                    <div className={styles.popupConfirmation__text}>
                        <Cross className={styles.popupConfirmation__subclose} /> Не подтверждайте ордер, если денежные средства не были получены. Вы не сможете подать апелляцию после завершения сделки.
                    </div>
                    <div className={styles.popupConfirmation__checboxs}>
                        <div className={styles.popupConfirmation__checbox}>
                            <input type="checkbox" id='checked' />
                            <label htmlFor='checked'><img src={checked} alt="" /></label>
                        </div>
                        <span>Я подтверждаю что покупатель перевел оплату. Сумма и информация об отправителе верны.</span>
                    </div>
                    <div className={styles.popupConfirmation__btns}>
                        <button className={styles.popupConfirmation__yes}>
                            Подтвердить оплату
                        </button>
                        <button className={styles.popupConfirmation__no}>
                            Отменить
                        </button>
                    </div>
                </div>
            </div>
            {/* 2 ШАГ ПРОДАВЦА */}
            {/*             <p className={styles.title}>
                Выполните проверку, для подтверждения перевода
            </p>
            <p className={styles.subtitle}>
                Код подтверждения электронной почты
            </p>
            <div className={styles.input}>
                <input type="text" placeholder='Введите шестизначный код' />
                <button className={styles.input__btn}>
                    Отправить код подтверждения
                </button>
            </div>
            <div className={styles.subtext}>
                Код отправлен на почту 2bfe*****@gmail.com
            </div>
            <div className={styles.confirmationText}>
                <span>Нет доступа к подтверждению безопасности</span>
                <div className={styles.confirmation__block}>
                    Для подтверждения поступления средств на счет обратитесь в техническую поддержу DCX-P2P
                </div>
            </div>
            <div className={styles.popup__code}>
                <img src={check} alt="" />
                Код подтверждения отправлен на электронную почту!
            </div> */}
            {/* 3 ШАГ ПРОДАВЦА */}
            {/*             <p className={styles.title}>
                Сделка завершена
            </p>
            <p className={styles.subtitle}>
                Способ получения платежа:
            </p>
            <div className={styles.text}>
                Тинькофф
            </div> */}
            <div className={styles.btnsBlock}>
                <div className={styles.btn}>
                    <p className={styles.btnText}>Оплачено</p>
                </div>
                <div className={styles.resetBlock}>
                    <p className={styles.reset}>Отменить ордер</p>
                </div>
            </div>
        </PayBlock>
    )
}

export default PayBlockSecondStageSeller;