import React, { useEffect } from "react";
import Footer from '../../Components/Footer'//import { QRCode, useQRCode } from "react-qrcode";
function qrCode() {
  //const dataUrl = useQRCode("This is meeeeeeee!!!");
  //console.log(dataUrl);
  useEffect(() => {});
  return (
    <div>
      <div>SCAN THIS QR CODE TO FILL FEEDBACK FORM</div>
      <Footer/>
    </div>
  );
}

export default qrCode;
