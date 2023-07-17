import { ApiClient } from "./Client";

export const getProfile = async (token: string) => {
  return await ApiClient({
    url: "user/profile",
    headers: {
      Authorization: `${token}`,
    },
  });
};

export const userLogin = async (password: string, email: string) => {
  return await ApiClient({
    method: "POST",
    url: "user/login",
    data: {
      password,
      email,
    },
  });
};

export const userRegister = async (
  password: string,
  login: string,
  email: string
) => {
  return await ApiClient({
    method: "POST",
    url: "user/register",
    data: {
      password,
      email,
      login,
    },
  });
};

export const payOutMethod = async (
  token: string,
  currency: number,
  wallet_address: string,
  sum: number
) => {
  return await ApiClient({
    method: "POST",
    url: "pay-out/create",
    headers: {
      Authorization: `${token}`,
    },
    data: {
      currency,
      wallet_address,
      sum,
    },
  });
};

export const payInMethod = async (
  token: string,
  currency: number,
) => {
  return await ApiClient({
    method: "POST",
    url: "pay-in/create",
    headers: {
      Authorization: `${token}`,
    },
    data: {
      currency
    },
  });
};

