import React from "react";
import styles from "./LableComponent.module.css";
function LableComponent(props) {
  let { label, value } = props;
  // capitalize the label
  // label = label.charAt(0).toUpperCase() + label.slice(1);
  if (!value.startsWith("PL")) {
    value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
  return (
    <div classname={styles.mainWrapper}>
      <div className={styles.lable}>{label}</div>
      <div className={styles.value}> {value}</div>
    </div>
  );
}

export default LableComponent;
