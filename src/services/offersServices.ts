import { ApiClient } from "./Client";

export const getOffersByType = async (type: number, token: string, currency: number) => {
  return await ApiClient({
    url: `offer?type=${type}&currency=${currency}`,
  });
};