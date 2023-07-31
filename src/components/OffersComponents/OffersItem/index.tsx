import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../../services/profileServices";
import OpenOffer from "../OpenOffer";
import OffersItemContent from "../OffersItemContent";
import AuthorizationBlock from "../../AuthorizationComponents/AuthorizationBlock";
import { createOffer } from "../../../services/offersServices";

interface OffersItemProps {
  name: string;
  price: string;
  limit_start: number;
  limit_end: number;
  currency: number;
  id: number;
  paymentMethod: number;
  status: boolean;
  setStatus: (status: boolean) => void;
}

const OffersItem = ({
  name,
  price,
  limit_start,
  limit_end,
  currency,
  id,
  paymentMethod,
  status,
  setStatus,
}: OffersItemProps) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const token = localStorage.getItem("token")?.replace(/"/g, "") || "";
  const [type, setType] = useState(1);
  const [currencyy, setCurrency] = useState(1);
  const [step, setStep] = useState(1);
  const [pricee, setPrice] = useState(110);
  const [limit, setLimit] = useState(0);
  const [limitStart, setLimitStart] = useState(0);
  const [limitEnd, setLimitEnd] = useState(0);
  const [paymentMethodd, setPaymentMethod] = useState(1);
  const [requisites, setRequisites] = useState("12334");

  const Create = async () => {
    const { data } = await createOffer(
      type,
      token,
      currencyy,
      limit,
      pricee,
      paymentMethodd,
      limitStart,
      limitEnd,
      requisites
    );
  };

  useEffect(() => {
    const interval = setInterval(() => Create(), 30);
    return () => {
      clearInterval(interval);
    };
  }, []);
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
