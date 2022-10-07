import axios from "axios";
import { USER_URL } from "../Utils/constants";

export const otpService = async (num) => {
  try {
    const { data } = await axios.post(USER_URL + "/otppost", {
      number: parseInt(num),
    });
    return data;
  } catch (err) {
    throw err;
  }
};

export const checkOTP = async (num, otp) => {
  try {
    console.log(num);
    const { data } = await axios.post(USER_URL + "/verifyotp", {
      number: parseInt(num),
      otp: parseInt(otp),
    });
    return data;
  } catch (err) {
    throw err;
  }
};
