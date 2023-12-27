import logo from "../img/solarios-icon.svg";
import name from "../img/solarios-icon-name.svg";

import styles from "../styles/icon.module.css";

export default function Icon() {
  return (
    <div className={styles["nav-icon"]}>
      <span>
        <img src={logo} />
      </span>
      <span>
        <img src={name} />
      </span>
    </div>
  );
}
