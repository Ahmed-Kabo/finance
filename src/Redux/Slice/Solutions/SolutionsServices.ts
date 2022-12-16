import axios from "axios";
import { ROUTS } from "../../../API/Api";

const getSolutions = async (token: any) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "GET",
    baseURL: `${ROUTS.SOLUTIONS}`,
    headers: headers,
  });
  return response.data;
};

const SolutionsServices = {
  getSolutions,
};

export default SolutionsServices;
