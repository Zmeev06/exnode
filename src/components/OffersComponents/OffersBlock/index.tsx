import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import OffesrTopBlock from "../TopBlock";
import Container from "../../UI/Container";
import OffersFilters from "../OffersFilter";
import { getOffersByType } from "../../../services/offersServices";
import { IOffer, IOfferData } from "../../../interfaces/serviceInterfaces";
import OffersItems from "../OffersItems.tsx";

const OffersBlock = () => {
  const [offersType, setOffersType] = useState<number>(1);
  const [offers, setOffers] = useState<IOfferData[]>();
  const token = localStorage.getItem("token") || "";

  const getOffers = async () => {
    const { data } = await getOffersByType(offersType, token);
    setOffers(data.data);
  };

  useEffect(() => {
    getOffers();
  }, [offersType]);
  return (
    <Container>
      <div className={styles.main}>
        <OffesrTopBlock type={offersType} setType={setOffersType} />
        <OffersFilters />
        <OffersItems data={offers || []} />
      </div>
    </Container>
  );
};
export default OffersBlock;
