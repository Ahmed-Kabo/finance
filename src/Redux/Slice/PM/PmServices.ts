import axios from "axios";
import { ROUTS } from "../../../API/Api";

const getPmUser = async (token: any) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "GET",
    baseURL: `${ROUTS.PM_USER}`,
    headers: headers,
  });
  return response.data;
};

const getPmStatus = async (token: any) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "GET",
    baseURL: `${ROUTS.PM_STATUS}`,
    headers: headers,
  });
  return response.data;
};

const PmServices = {
  getPmUser,
  getPmStatus,
};

export default PmServices;
