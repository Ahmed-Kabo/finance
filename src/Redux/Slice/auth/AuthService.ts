import axios from "axios";
import { ROUTS } from "../../../API/Api";
import {
  IForgetPassword,
  IResetPassword,
  Login,
} from "../../../Types/userType";

//login API fn
const login = async (userData: Login) => {
  const response = await axios({
    method: "POST",
    baseURL: `${ROUTS.LOGIN_URL}`,
    data: userData,
  });
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
//logout  API fn
const logout = () => {
  localStorage.removeItem("user");
};

//forget password

const ForgetPassword = async (data: IForgetPassword) => {
  const response = await axios({
    method: "POST",
    baseURL: `${ROUTS.FORGOT_PASSWORD}`,
    data: data,
  });

  return response.data;
};

//reset password

const resetPassword = async (data: IResetPassword) => {
  const response = await axios({
    method: "POST",
    baseURL: `${ROUTS.RESET_PASSWORD}`,
    data: data,
  });

  return response.data;
};
const authService = {
  login,
  logout,
  ForgetPassword,
  resetPassword,
};

//export the authService function
export default authService;
