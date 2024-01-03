import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <header className={styles.navbar}>
      <Link to="/home" className={styles.link}>HOME</Link>
      <Link to="/shop" className={styles.link}>SHOP</Link>
    </header>
  );
}
