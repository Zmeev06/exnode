import { ApiClient } from "./Client";

export const getOffersByType = async (type: number, token: string, currency: number) => {
  return await ApiClient({
    url: `offer?type=${type}&currency=${currency}`,
  });
};

export const createOffer = async(type: number, token: string, currency: number, limit: number, price: number, paymentMethod: number, limitStart: number, limitEnd: number, requisites: string) => {
  return await ApiClient({
    url: "offer/create",
    method: "POST",
    headers: {
      Authorization: `${token}`,
    },
    data: {
      type,
      currency, 
      limit,
      price, 
      payment_method: paymentMethod, 
      limit_start: limitStart, 
      limit_end: limitEnd, 
      requisites
    },
  });
};