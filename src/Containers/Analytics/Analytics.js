import React from "react";
import styles from "./Analytics.module.css";
function Analytics() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },

    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
  ];
  return (
    <div>
      <div className={styles.loginText}>ANALTYTICS</div>
      <div>
        {/* Filters */}
        <form>
          {/* search dropdown */}
          <div>
            <label for="search">Police Station</label>
            <select name="search" id="search">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </form>
      </div>
      <div className={styles.data}>
        {data &&
          data.map((item, index) => {
            return (
              <div>
                <div>{item.name}</div>
                <div>{item.uv}</div>
                <div>{item.pv}</div>
                <div>{item.amt}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Analytics;
