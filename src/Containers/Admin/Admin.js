import React from "react";
import styles from "./Admin.module.css";
import QrCode from "../../Assets/Admin/QrCode.svg";
import AAMimg from "../../Assets/Admin/AAM1.png";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/";
function Admin() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [captcha, setCaptcha] = React.useState(false);
  const LogOut = () => {
    console.log("LogOut");
  };
  return (
    <div>
      {/* <NavBar /> */}
      {!loggedIn ? (
        <div className={styles.mainWrappper}>
          <div>
            <img src={QrCode} />
          </div>
          <div className={styles.loginText}>ADMIN LOGIN</div>
          <div className={styles.loginWrapper}>
            <div>
              <div className={styles.component}>
                <div className={styles.lable}>Email Id</div>
                <input type="text" placeholder="Email Id" />
              </div>
              <div className={styles.component}>
                <div className={styles.lable}>Password</div>
                <input type="password" placeholder="Password" />
              </div>
              {/* I am not robot */}
              <div className={styles.captcha}>
                <div>Please tick this box to continue</div>
                <ReCAPTCHA
                  sitekey="6LeWOV0iAAAAAI7zRPFKRlux_m_q-c_WwbtvoQdj"
                  onChange={(e) => {
                    console.log(e);
                  }}
                />
              </div>
              <div className={styles.submitWrapper}>
                <button>Submit</button>
              </div>
            </div>
          </div>
          <div className={styles.image}>
            <img src={AAMimg} />
          </div>
        </div>
      ) : (
        <div>
          <div>
            <div>WELCOME BACK!</div>

            {/* Routes */}
            <div>
              <Link to="/overview">
                <div>Admin overview</div>
              </Link>
            </div>
            <div>
              <Link to="/analytics">
                <div>Analytics</div>
              </Link>
            </div>
            <div>
              <Link to="/qrcode">
                <div>Generate QR code</div>
              </Link>
            </div>
          </div>
          <div onClick={LogOut}>
            <div>Log Out</div>
          </div>
          <div>
            <img src={AAMimg} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
