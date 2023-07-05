import React from "react";
import styles from "./index.module.scss";
import OffesrTopBlock from "../TopBlock";
import Container from "../../UI/Container";

const OffersBlock = () => {
  return (
    <Container>
      <div className={styles.main}>
        <OffesrTopBlock />
      </div>
    </Container>
  );
};
export default OffersBlock;
