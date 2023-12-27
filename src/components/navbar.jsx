import styles from "../styles/navbar.module.css";

import { useState } from "react";
import Icon from "./icon";

const nav_items = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState("Home");

  return (
    <nav className={styles.navbar}>
      <div className={styles["nav-container"]}>
        <Icon />
        <div>
          <ul className={styles["nav-menu"]}>
            {nav_items.map((item, idx) => (
              <li
                className={styles["nav-item"]}
                key={idx}
                onClick={() => setActiveMenu(item.name)}
              >
                <a href={item.href}>{item.name}</a>
                <span className={activeMenu === item.name && styles.bottom} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button title="contact us" type="button" className="cta-btn">
            Get a quote
          </button>
        </div>
      </div>
    </nav>
  );
}
