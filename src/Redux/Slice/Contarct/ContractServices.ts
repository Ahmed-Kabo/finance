import axios from "axios";
import { ROUTS } from "../../../API/Api";

const getContract = async (token: any) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "GET",
    baseURL: `${ROUTS.CONTARCT}`,
    headers: headers,
  });
  return response.data;
};

const ContarctServices = {
  getContract,
};

export default ContarctServices;
