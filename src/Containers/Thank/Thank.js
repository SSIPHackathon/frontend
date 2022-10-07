import React, { useState } from "react";
import NavBar from "../../Components/NavBar";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
import styles from "./Thank.module.css";
// import TextareaAutosize from "@mui/material/TextareaAutosize";
// import SendIcon from "@mui/icons-material/SendAndArchiveOutlined";
// import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

import Footer from "../../Components/Footer";

const Thank = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.boxx}>
        <div className={styles.middle}>
          <div
            variant="h4"
            color="darkblue"
            style={{
              fontFamily: "Metra SemiBold",
              fontSize: "30px",
              color: "#14195D",
            }}
          >
            THANK YOU
          </div>
          <div
            variant="h5"
            color="darkblue"
            style={{
              fontFamily: "Metra SemiBold",
              fontSize: "23px",
              color: "#14195D",
            }}
          >
            FOR FILLING UP FEEDBACK FORM!
          </div>
          <div
            style={{
              fontFamily: "Metra Med",
              fontSize: "20px",
              paddingTop: "20px",
              width: "80%",
            }}
          >
            You can contact your nearby police station incase of any emergency.
          </div>
        </div>

        <div className={styles.middle2}>
          <div
            style={{
              fontFamily: "Metra Med",
              fontSize: "20px",
              paddingTop: "20px",
            }}
          >
            :Name:
          </div>
          <div
            style={{
              fontFamily: "Metra Semibold",
              fontSize: "20px",
              paddingTop: "20px",
            }}
          >
            Katargam police station
          </div>
          <div
            style={{
              fontFamily: "Metra Med",
              fontSize: "20px",
              paddingTop: "20px",
            }}
          >
            :Contact Number:
          </div>
          <div
            style={{
              fontFamily: "Metra Semibold",
              fontSize: "20px",
              paddingTop: "20px",
            }}
          >
            +912020202020
          </div>
          <div
            style={{
              fontFamily: "Metra Med",
              fontSize: "20px",
              paddingTop: "20px",
            }}
          >
            :Address:
          </div>
          <div
            style={{
              fontFamily: "Metra Semibold",
              fontSize: "20px",
              paddingTop: "20px",
              width: "50%",
            }}
          >
            6R5X+PRW, Surat - Kamrej Hwy, Sadhna Society, Laxman Nagar,
            Varachha, Surat, Gujarat 395006
          </div>
        </div>
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Thank;
