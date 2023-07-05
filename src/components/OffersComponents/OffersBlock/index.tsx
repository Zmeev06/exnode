import React from "react";
import styles from "./index.module.scss";
import OffesrTopBlock from "../TopBlock";
import Container from "../../UI/Container";
import OffersFilters from "../OffersFilter";

const OffersBlock = () => {
  return (
    <Container>
      <div className={styles.main}>
        <OffesrTopBlock />
        <OffersFilters />
      </div>
    </Container>
  );
};
export default OffersBlock;
