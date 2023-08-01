import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../../services/profileServices";
import OpenOffer from "../OpenOffer";
import OffersItemContent from "../OffersItemContent";
import AuthorizationBlock from "../../AuthorizationComponents/AuthorizationBlock";

interface OffersItemProps {
  name: string;
  price: string;
  limit_start: number;
  limit_end: number;
  currency: number;
  id: number;
  paymentMethod: number;
}

const OffersItem = ({
  name,
  price,
  limit_start,
  limit_end,
  currency,
  id,
  paymentMethod,
}: OffersItemProps) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);
  const token = localStorage.getItem("token")?.replace(/"/g, "") || "";
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const getProfileFunc = async () => {
    const { data } = await getProfile(token);
    data !== "isError" && setStatus(true);
  };
  useEffect(() => {
    getProfileFunc();
  });
  return (
    <>
      {!isOpen ? (
        <OffersItemContent
          name={name}
          price={price}
          limit_end={limit_end}
          limit_start={limit_start}
          paymentMethod={paymentMethod}
          id={id}
          setIsOpen={setIsOpen}
          currency={currency}
          status={status}
          setIsOpenModal={setIsOpenModal}
        />
        
      ) : (
        <OpenOffer
          price={price}
          paymentMethod={paymentMethod}
          limit_start={limit_start}
          name={name}
          currency={currency}
          setIsOpen={setIsOpen}
          id={id}
        />
      )}
      {isOpenModal && (
        <AuthorizationBlock
          setOpenModal={setIsOpenModal}
          setStatus={setStatus}
          openModal={isOpenModal}
        />
      )}
    </>
  );
};
export default OffersItem;
