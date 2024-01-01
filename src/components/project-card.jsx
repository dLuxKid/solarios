import styles from "../styles/projects.module.css";
import img0 from "../img/projimg1.png";
import img1 from "../img/projimg2.png";
import img2 from "../img/projimg3.png";
import img3 from "../img/projimg4.png";

const imgs = [img0, img1, img2, img3];

export default function Card({ itemRef, idx }) {
  return (
    <div className={styles.card} ref={itemRef.ref}>
      <div className={styles["about-card"]}>
        <img src={imgs[idx]} className={styles["card-img"]} />
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
