import React, { useEffect } from "react";
import { QRCode, useQRCode } from "react-qrcode";
import { Link } from "react-router-dom";
import download from "../../Assets/General/download.svg";
import styles from "./QRCode.module.css";
function qrCode() {
  const dataURL = useQRCode("localhost:3000/qrCode?policeId=1234567890");
  const [data, setData] = React.useState(null);
  useEffect(() => {
    setData({
      policeId: "1234567890",
      name: "Katargam Police Station",
      number: "1234567890",
    });
  });
  return (
    <div className={styles.mainWrappper}>
      <div className={styles.loginText}>
        SCAN THIS QR CODE <br />
        TO FILL FEEDBACK FORM
      </div>
      {dataURL && (
        <img
          style={{
            width: "250px",
          }}
          src={dataURL}
          alt="QR Code"
        />
      )}
      <div>
        {data && (
          <div className={styles.data}>
            <div
              style={{
                marginBottom: "10px",
              }}
            >
              {data.name}
            </div>
            <div
              style={{
                marginBottom: "10px",
              }}
            >
              {data.number}
            </div>
          </div>
        )}
      </div>
      <div className={styles.download}>
        <img src={download} width={23} />
        <button>DOWNLOAD</button>
      </div>
      <div>
        <Link to={"/admin"}>
          <button>BACK</button>
        </Link>
      </div>
    </div>
  );
}

export default qrCode;
