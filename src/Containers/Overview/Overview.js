import React from "react";
import { Link } from "react-router-dom";
import AAM1 from "../../Assets/Admin/AAM1.png";
import LableComponent from "../../Components/LableComponent/LableComponent";
import styles from "./Overview.module.css";
function Overview() {
  const [Admin, setAdmin] = React.useState({
    policeStationId: "PL0001",
    name_of_office: "Police Station",
    address:
      "GAYAKWAD POLICE STATION, JAMALPUR AHMEDABAD CITY SEN. PI 079-25392647 0 COMPUTER ROOM 37 Police Station GHATLODIYA POLICE STATION, OPP.AAKASH",
    district: "AHMEDABAD CITY",
    off_head: "DCP",
    off_phone: "079-25320664",
    branch: "READER OF JCP/DCP",
    QrCodeCount: "",
  });
  return (
    <div className={styles.MainWrapper}>
      <div className={styles.overViewText}>ADMIN OVERVIEW</div>
      <div
        className={styles.overViewCard}
        style={{
          background: "#E9E9E9",
        }}
      >
        <LableComponent
          label="Police Station ID"
          value={Admin.policeStationId}
        />
        <LableComponent label="Name of Office" value={Admin.name_of_office} />
        <LableComponent label="Address" value={Admin.address} />
        <LableComponent label="District" value={Admin.district} />
        <LableComponent label="Officer Head" value={Admin.off_head} />
        <LableComponent label="Officer Phone" value={Admin.off_phone} />
        <LableComponent label="Branch" value={Admin.branch} />
        {/* <LableComponent label="QrCode Count" value={Admin.QrCodeCount} /> */}
      </div>
      <div>
        <Link to="/admin">
          <button className={styles.button}>Back</button>
        </Link>
      </div>
      <div>
        <img src={AAM1} alt="" />
      </div>
    </div>
  );
}

export default Overview;
