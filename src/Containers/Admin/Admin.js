import React from "react";
import styles from "./Admin.module.css";
import QrCode from "../../Assets/Admin/QrCode.svg";
import AAMimg from "../../Assets/Admin/AAM1.png";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

function Admin() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const LogOut = () => {
    console.log("LogOut");
  };
  return (
    <div>
      {!loggedIn ? (
        <div className={styles.mainWrappper}>
          <div className={styles.loginWrapper}>
            <div>
              <img src={QrCode} />
            </div>
            <div className={styles.loginText}>ADMIN LOGIN</div>
            <div>
              <div>
                <input type="text" placeholder="Email" />
              </div>
              <div>
                <input type="password" placeholder="Password" />
              </div>
              {/* I am not robot */}
              <div>
                <div>Please tick this box to continue</div>
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={(e) => {
                    console.log(e);
                  }}
                />
              </div>
              <div>
                <button>Submit</button>
              </div>
            </div>
          </div>
          <div>
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
