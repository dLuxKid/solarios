import styles from "../styles/projects.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles["about-card"]}>
        <div className={styles["card-img"]} />
        <div className={styles["card-info"]}>
          <h2>United Nations Development Program</h2>
          <h4>Vietnam, Asia</h4>
          <p>
            We and the UNDP jointly worked on a project entitled “Energy
            Efficiency Improvement in High-rise and Commercial Buildings in
            VietNam” (EECB) and discuss the continued development of the energy
            efficient and green buildings in Viet Nam.
          </p>
        </div>
      </div>
      <div className={styles.duration}>
        <p>Duration: 4 months</p>
      </div>
    </div>
  );
}
