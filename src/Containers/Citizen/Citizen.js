/* eslint-disable */
import { Box, TextareaAutosize, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/index";
import OtpInput from "react-otp-input";
import styles from "./Citizen.module.css";
import InputLabel from "@mui/material/InputLabel";
import CallIcon from "@mui/icons-material/Call";
import Input from "@mui/material/Input";
import SendIcon from "@mui/icons-material/SendAndArchiveOutlined";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Footer from "../../Components/Footer";
import qrCode from "../../Assets/Admin/QrCode.svg";
import AAM1 from "../../Assets/Admin/AAM1.png";
import { otpService, checkOTP } from "../../Services/example.service";
import { useHistory } from "react-router-dom";
const Citizen = () => {
  const [otp, setotp] = useState("");
  const [number, setnumber] = useState("");
  const [eror, seteror] = useState("");
  const [verified, setverified] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useHistory();
  const verify = async () => {
    if (number.length !== 10) {
      // seteror("Please enter a valid number");
      alert("Please enter a valid number");
    } else {
      await otpService(number).then((res) => {
        console.log(res);
      });
      setverified(true);
    }
  };
  const subb = () => {};
  return (
    <div>
      <NavBar />
      <div className={styles.mainWrapper}>
        <div>
          <img
            src={qrCode}
            style={{
              width: "130px",
              marginTop: "250px",
            }}
          />
          <div className={styles.textTitle}>CITIZEN LOGIN</div>
        </div>
        <div className={styles.Wrapper}>
          <div
            style={{
              fontFamily: "Metra SemiBold",
              width: "60%",
              textAlign: "center",
              color: "#14195D",
              lineHeight: "20px",
            }}
          >
            Please verify your mobile number to fill up Feedback Form
          </div>

          <FormControl>
            <div className={styles.text}>Mobile number</div>
            <Input
              required
              maxlength="10"
              // placeholder="+91"
              type="tel"
              style={{
                fontFamily: "Metra SemiBold",
              }}
              onChange={(e) => setnumber(e.target.value)}
              id="input-with-icon-adornment"
              endAdornment={
                <InputAdornment position="end">
                  {number.length != 10 || verified ? (
                    <>
                      <Button
                        style={{
                          fontFamily: "Metra SemiBold",
                          color: "rgb(20, 25, 93, 0.4)",
                        }}
                        disabled={true}
                        onClick={verify}
                      >
                        Verify
                      </Button>
                    </>
                  ) : (
                    <Button
                      style={{
                        fontFamily: "Metra SemiBold",
                        color: "rgb(20, 25, 93, 1)",
                      }}
                      onClick={verify}
                    >
                      Verify
                    </Button>
                  )}
                </InputAdornment>
              }
            />
            <br />
            <div className={styles.text}>Enter OTP</div>

            <OtpInput
              value={otp}
              onChange={(e) => {
                setotp(e);
                console.log(e);
              }}
              numInputs={6}
              separator={<span>-</span>}
            />
            <label className={styles.error}>{eror}</label>

            <button
              className={styles.submit}
              onClick={async (e) => {
                e.preventDefault();
                await checkOTP(number, otp).then((res) => {
                  console.log(res);
                  if (res.verified) {
                    navigate.push("/feedback");
                  } else {
                  }
                });
              }}
            >
              Submit
            </button>
          </FormControl>
        </div>

        <img
          src={AAM1}
          style={{
            marginTop: "40px",
          }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Citizen;
