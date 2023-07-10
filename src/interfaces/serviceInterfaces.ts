export interface IProfileData {
  id: number;
  login: string;
  balance_usdt: number;
  balance_btc: number;
  balance_eth: number;
}

export interface IProfile {
  success: boolean;
  data: IProfileData;
}

export interface IOrderData {
  id: number;
  created_at: number;
  status: number;
  sum: string;
  price: string;
  requisites: string;
  payment_method: number;
}

export interface IOrderInfo {
  success: boolean;
  data: IOrderData;
}

export interface IMessages {
  success: boolean;
  data: IMessage[];
}

export interface IMessage {
  id: number;
  text: string;
  timestamp: number;
  user: {
    id: number;
    login: string;
  };
}

export interface IOffer {
  success: boolean;
  data: IOfferData;
}

export interface IOfferData {
  id: number;
  type: number;
  currency: number;
  limit: string;
  price: string;
  payment_method: number;
  limit_start: number;
  limit_end: number;
  percent_success: number;
  requisites: string;
  user: {
    id: number;
    login: string;
    is_online: number;
  };
}

