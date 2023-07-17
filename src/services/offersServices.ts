import { ApiClient } from "./Client";

export const getOffersByType = async (type: number, token: string) => {
  return await ApiClient({
    url: `offer?type=${type}`,
  });
};

export const getAllSellerOrders = async (token: string) => {
  return await ApiClient({
    url: `order/seller`,
    headers: {
      Authorization: `${token}`,
    },
  });
};