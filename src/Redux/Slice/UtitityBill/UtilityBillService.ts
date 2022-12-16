import axios from "axios";
import { ROUTS } from "../../../API/Api";

const getUtilityBill = async (key: string, token: any) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "GET",
    baseURL: `${ROUTS.UTILITY_BILL}`,
    headers: headers,
    params: { return_all: 0, page: key },
  });
  return response.data;
};

const sendUtilityBillToPm = async (id: string, token: any) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "GET",
    baseURL: `${ROUTS.SEND_FILE_UTILITY(id)}`,
    headers: headers,
  });
  return response.data;
};

const uploadUtilityBill = async (data: any, token: any) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "POST",
    baseURL: `${ROUTS.UPLODE_FILE_UTILITY}`,
    headers: headers,
    data: data,
  });
  return response.data;
};
const UtilityBillService = {
  getUtilityBill,
  uploadUtilityBill,
  sendUtilityBillToPm,
};

export default UtilityBillService;
