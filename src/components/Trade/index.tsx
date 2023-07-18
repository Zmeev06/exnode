import React, { useState } from "react";
import styles from "./index.module.scss";
import Container from "../UI/Container";
import Screens from "../../assets/img/trade/screens.png";
import ContentBlock from "../UI/ContentBlock";

const Trade = () => {
  const [activeBtn, setActiveBtn] = useState(0);

  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.trade}>
          <div className={styles.leftSide}>
            <h2 className={styles.title}>Торгуйте легко</h2>
            <div className={styles.swichBtn}>
              <button
                onClick={() => setActiveBtn(0)}
                className={`${styles.btn} ${
                  activeBtn === 0 && styles.activeBtn
                }`}
              >
                Покупка криптовалюты
              </button>
              <button
                onClick={() => setActiveBtn(1)}
                className={`${styles.btn} ${
                  activeBtn === 1 && styles.activeBtn
                }`}
              >
                Продажа криптовалюты
              </button>
            </div>
            <div className={styles.steps}>
              <div className={styles.step}>
                <h3 className={styles.stepTitle}>Оффер</h3>
                <p className={styles.stepText}>
                  Как только вы отправите оффер о покупке, DCX-P2P немедленно
                  заморозит для вас криптовалюту.
                </p>
              </div>
              <div className={styles.step}>
                <h3 className={styles.stepTitle}>Оплата</h3>
                <p className={styles.stepText}>
                  Убедитесь, что вы отправили продавцу точную сумму, используя
                  любой из доступных способов оплаты. После завершения перевода
                  нажмите кнопку «Оплачено», чтобы подтвердить транзакцию
                </p>
              </div>
              <div className={styles.step}>
                <h3 className={styles.stepTitle}>Получение</h3>
                <p className={styles.stepText}>
                  Как только продавец подтвердит платеж, замороженная
                  криптовалюта будет незамедлительно переведена на кошелек
                  вашего аккаунта.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.rightSide}>
            <img src={Screens} alt="" />
          </div>
        </div>
        <div className={styles.dcx}>
          <h2 className={styles.dcxTitle}>DCX - это про...</h2>
          <div className={styles.grid}>
            <ContentBlock className={`${styles.gridItem} ${styles.gridItem1}`}>
              <h3 className={styles.stepTitle}>Заработок</h3>
              <p className={styles.stepText}>
                Наша миссия состоит в том, чтобы обеспечить глобальное получение
                дохода за счет инвестирования и торговли криптовалютой.
                Внимательно следя за развивающимся рынком, мы постоянно
                адаптируемся к изменениям в отрасли, чтобы обеспечить
                всесторонний охват и успех.
              </p>
            </ContentBlock>
            <ContentBlock className={`${styles.gridItem} ${styles.gridItem2}`}>
              <h3 className={styles.stepTitle}>Безопасность</h3>
              <p className={styles.stepText}>
                Благодаря нашему обширному опыту работы с криптовалютами мы
                можем минимизировать риски мошенничества, обмана и манипуляций.
                Мы внимательно следим за работой нашей платформы и принимаем
                немедленные меры против любых действий, нарушающих правила
                торговли.
              </p>
            </ContentBlock>
            <ContentBlock className={`${styles.gridItem} ${styles.gridItem3}`}>
              <h3 className={styles.stepTitle}>Качество</h3>
              <p className={styles.stepText}>
                Мы стремимся поставлять качественный продукт, и это
                обязательство останется неизменным. Наша цель — сделать так,
                чтобы любые действия на нашем сервисе были эффективными,
                надежными и полезными для наших пользователей.
              </p>
            </ContentBlock>
            <ContentBlock className={`${styles.gridItem} ${styles.gridItem4}`}>
              <h3 className={styles.stepTitle}>Независимость</h3>
              <p className={styles.stepText}>
                Мы разрабатываем децентрализованные сервисы, на которых
                пользователи имеют возможность самостоятельно определять условия
                работы
              </p>
            </ContentBlock>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Trade;
