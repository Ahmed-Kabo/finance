import axios from "axios";
import { ROUTS } from "../../../API/Api";

const getStatus = async (token: any) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "GET",
    baseURL: `${ROUTS.FINANCED_STATUS}`,
    headers: headers,
  });
  return response.data;
};

const StatusService = {
  getStatus,
};

export default StatusService;
