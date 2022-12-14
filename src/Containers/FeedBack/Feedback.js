import React, { useState } from "react";
import NavBar from "../../Components/NavBar";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import styles from "./Feedback.module.css";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import SendIcon from "@mui/icons-material/SendAndArchiveOutlined";
import Button from "@mui/material/Button";
import Footer from "../../Components/Footer";

const Feedback = () => {
  const [feedback1, setfeedback1] = useState("own");
  const [feedback2, setfeedback2] = useState("imm");
  const [feedback3, setfeedback3] = useState("");
  return (
    <div className={styles.margin}>
      <NavBar />
      <div className={styles.form}>
        <FormControl>
          <FormLabel
            // style={{ fontWeight: "bolder" }}
            id="demo-radio-buttons-group-label"
            style={{
              fontFamily: "Metra SemiBold",
              color: "black",
            }}
          >
            1. How did you come to police station.
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={feedback1}
            onChange={(e) => setfeedback1(e.target.value)}
            name="radio-buttons-group"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: "center",
                fontFamily: "Metra",
              }}
            >
              <FormControlLabel
                value="relative"
                control={<Radio />}
                label="Through a person known to a police officer"
              />
              Through a person known to a police officer
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: "center",
                fontFamily: "Metra",
              }}
            >
              <FormControlLabel
                value="neighbour"
                control={<Radio />}
                label="With a neighbour/ local leader"
              />
              With a neighbour/ local leader
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: "center",
                fontFamily: "Metra",
              }}
            >
              <FormControlLabel
                value="own"
                control={<Radio />}
                label="On your own"
              />
              On your own
            </div>
          </RadioGroup>
          <br />
          <FormLabel
            id="demo-radio-buttons-group-label"
            style={{
              fontFamily: "Metra SemiBold",
              color: "black",
            }}
          >
            2. After how much time you were heard in PS
          </FormLabel>
          <RadioGroup
            onChange={(e) => setfeedback2(e.target.value)}
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={feedback2}
            name="radio-buttons-group"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: "center",
                fontFamily: "Metra",
              }}
            >
              <FormControlLabel
                value="15plus"
                control={<Radio />}
                label="More than 15 minutes"
              />
              More than 15 minutes
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: "center",
                fontFamily: "Metra",
              }}
            >
              <FormControlLabel
                value="15"
                control={<Radio />}
                label="15 minutes"
              />
              15 minutes
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: "center",
                fontFamily: "Metra",
              }}
            >
              <FormControlLabel
                value="10"
                control={<Radio />}
                label="10 minutes"
              />
              10 minutes
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: "center",
                fontFamily: "Metra",
              }}
            >
              <FormControlLabel
                value="5"
                control={<Radio />}
                label="5 minutes"
              />
              5 minutes
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: "center",
                fontFamily: "Metra",
              }}
            >
              <FormControlLabel
                value="imm"
                control={<Radio />}
                label="Immediately"
              />
              Immediately
            </div>
          </RadioGroup>
          <br />
          <FormLabel
            style={{
              fontFamily: "Metra SemiBold",
              color: "black",
            }}
            id="demo-radio-buttons-group-label"
          >
            3. How would you describe your experience with police officers in
            the police station?
          </FormLabel>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Maximum 300 characters allowed."
            onChange={(e) => setfeedback3(e.target.value)}
            style={{
              width: " 500px",
              height: "100px",
              minWidth: "100px",
              fontFamily: "Metra",
              marginTop: "10px",
              padding: "10px",
              backgroundColor: "#E9E9E9",
              borderRadius: "10px",
              border: "none",
              outline: "none",
            }}
          />
          <br />
          <button
            className={styles.submit}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Submit
          </button>
        </FormControl>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Feedback;
