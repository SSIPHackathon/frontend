import React from "react";
import { Link } from "react-router-dom";
import AAM1 from "../../Assets/Admin/AAM1.png";
function Overview() {
  // policeStationId: {
  //     type: String,
  //   },
  //   name_of_office: {
  //     type: String,
  //   },
  //   address: {
  //     type: String,
  //   },
  //   district: {
  //     type: String,
  //   },
  //   off_head: {
  //     type: String,
  //   },
  //   off_phone: {
  //     type: String,
  //   },
  //   branch: {
  //     type: String,
  //   },
  //   QrCodeCount: {
  //     type: Number,
  //   },
  //   password: {
  //     type: String,
  //   },
  const [Admin, setAdmin] = React.useState({
    policeStationId: "",
    name_of_office: "",
    address: "",
    district: "",
    off_head: "",
    off_phone: "",
    branch: "",
    QrCodeCount: "",
  });
  return (
    <div>
      <h1>Admin Overview</h1>
      <div>
        <div>
          <div>policeStationId</div>
          <div>{Admin.policeStationId}</div>
        </div>
        <div>
          <div>name_of_office</div>
          <div>{Admin.name_of_office}</div>
        </div>
        <div>
          <div>address</div>
          <div>{Admin.address}</div>
        </div>
        <div>
          <div>district</div>
          <div>{Admin.district}</div>
        </div>
        <div>
          <div>off_head</div>
          <div>{Admin.off_head}</div>
        </div>
        <div>
          <div>off_phone</div>
          <div>{Admin.off_phone}</div>
        </div>
        <div>
          <div>branch</div>
          <div>{Admin.branch}</div>
        </div>
      </div>
      <div>
        <Link to="/admin">
          <button>Back</button>
        </Link>
      </div>
      <div>
        <img src={AAM1} alt="" />
      </div>
    </div>
  );
}

export default Overview;
