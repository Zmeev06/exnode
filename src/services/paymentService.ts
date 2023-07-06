import { ApiClient } from "./Client";

export const getOrderInfo = async (token: string, id: number) => {
  return await ApiClient({
    url: "order/show",
    method: "POST",
    headers: {
      Authorization: `${token}`,
    },
    data: {
      id: 1,
    },
  });
};

export const sendMessage = async (
  text: string,
  order_id: number,
  token: string
) => {
  return await ApiClient({
    url: "message/create",
    method: "POST",
    headers: {
      Authorization: `${token}`,
    },
    data: {
      text,
      order_id,
    },
  });
};

export const getMessages = async (order_id: number, token: string) => {
  return await ApiClient({
    url: `message?order_id=${order_id}`,
    headers: {
      Authorization: `${token}`,
    },
  });
};
