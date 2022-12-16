import axios from "axios";
import { MAIN_URL } from "../API/Api";
const HttpsClient = axios.create({
  baseURL: MAIN_URL,
  headers: { Authorization: `Bearer `, Accept: "application/json" },
});

export default HttpsClient;
