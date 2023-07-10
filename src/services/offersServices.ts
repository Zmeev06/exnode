import { ApiClient } from "./Client";

export const getOffersByType = async (type: number, token: string) => {
  return await ApiClient({
    url: `offer?type=${type}`,
  });
};