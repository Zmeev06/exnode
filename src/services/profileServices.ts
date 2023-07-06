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
