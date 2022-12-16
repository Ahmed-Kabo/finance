import axios from "axios";
import { ROUTS } from "../../../API/Api";

const getTickets = async (token: any) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "GET",
    baseURL: `${ROUTS.TICKETS}`,
    headers: headers,
  });
  return response.data;
};

const getTicketsDetails = async (token: any, id: string) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "GET",
    baseURL: `${ROUTS.TICKETS_DETAILS(id)}`,
    headers: headers,
  });
  return response.data;
};

const getTicketsDetailsSunlight = async (token: any, id: string) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "GET",
    baseURL: `${ROUTS.TICKETS_DETAILS_sunlight(id)}`,
    headers: headers,
  });
  return response.data;
};

const TicketsServices = {
  getTickets,
  getTicketsDetails,
  getTicketsDetailsSunlight,
};

export default TicketsServices;
