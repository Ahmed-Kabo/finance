import axios from "axios";
import { ROUTS } from "../../../API/Api";

const getSiteSurvey = async (key: string, token: any) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "GET",
    baseURL: `${ROUTS.SITE_SERVEY}`,
    headers: headers,
    params: { return_all: 0, page: key },
  });
  return response.data;
};

const sendSiteSurveyToPm = async (id: string, token: any) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "GET",
    baseURL: `${ROUTS.SEND_FILE_SITE(id)}`,
    headers: headers,
  });
  return response.data;
};

const uploadSiteSurvey = async (data: any, token: any) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "POST",
    baseURL: `${ROUTS.UPLODE_FILE_SITE}`,
    headers: headers,
    data: data,
  });
  return response.data;
};

const SiteSurvayService = {
  getSiteSurvey,
  uploadSiteSurvey,
  sendSiteSurveyToPm,
};

export default SiteSurvayService;
