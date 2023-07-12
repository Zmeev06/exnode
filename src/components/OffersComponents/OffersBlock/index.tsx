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
  const [currency, setCurrency] = useState(1)
  const [offers, setOffers] = useState<IOfferData[]>();
  const token = localStorage.getItem("token") || "";

  const getOffers = async () => {
    const { data } = await getOffersByType(offersType, token, currency);
    setOffers(data.data);
  };

  useEffect(() => {
    getOffers();
  }, [offersType, currency]);
  return (
    <Container>
      <div className={styles.main}>
        <OffesrTopBlock type={offersType} setType={setOffersType} setCurrency={setCurrency} currency={currency}/>
        <OffersFilters />
        {offers?.length !== 0  ? (
          <OffersItems data={offers || []} />
        ) : (
          <p className={styles.offersNull}>Активных офферов нет</p>
        )}
      </div>
    </Container>
  );
};
export default OffersBlock;
