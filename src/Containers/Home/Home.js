/* eslint-disable */
import React,{ useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Home.module.css";
import NavBar from "../../Components/NavBar";
import QrReader from 'react-qr-reader';

const Home = () => {
  // const exampleState = useSelector((state) => state.example.exampleState);
  const [data, setData] = useState('No result');
  const handleResult = (result, error) => {
    if (!!result) {
      setData("");
    }

    if (!!error) {
      console.info(error);
    }
  }

  return (
    <div className={styles.qranimation2}>
      <NavBar />
      <div className={styles.footerdiv}>
        <div className={styles.rectanglediv2} />
        <div className={styles.homedepartmentgujaratstate}>
          Home Department Gujarat State
        </div>
      </div>
      <div>
        <div className={styles.qrvideo}>
        <QrReader
                onScan={handleResult}  
                onResult={handleResult}
                style={{ width: '78%' }}
              />
      </div>
      </div>
      <div className={styles.scanqrcode1}>
        <div className={styles.rectanglediv3} />
        <div className={styles.scanqrcode2}>SCAN QR CODE</div>
      </div>
      <div className={styles.lucideqrcodeicon2}>
        <img
          className={styles.lucideqrcodeicon}
          alt=""
          src="/lucide_qr-code.svg"
        />
      </div>
    </div>
  );
};

export default Home;

// /* eslint-disable */
// import React from "react";
// import NavBar from "./NavBar";
// import QrReader from 'react-qr-scanner'
// import "./QRAnimation2.css";

// const QRAnimation2 = () => {
//     const handleScan = () => {

//     }
//     const handleError = () => {

//     }
//   return (

//  <div className="qr-animation-2}>
//         <NavBar/>
//       <div className="footer-div">
//         <div className="rectangle-div2" />
//         <div className="home-department-gujarat-state">
//           Home Department Gujarat State
//         </div>
//       </div>
//       <div className="scan-qr-code1">
//         <div className="rectangle-div3" />
//         <div className="scan-qr-code2">SCAN QR CODE</div>
//       </div>
//       <div className="lucideqr-code-icon2"><img className="lucideqr-code-icon" alt="" src="/lucide_qr-code.svg" /></div>
//     </div>
//   );
// };

// export default QRAnimation2;
