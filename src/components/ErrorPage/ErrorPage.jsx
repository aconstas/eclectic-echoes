import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

export default function ErrorPage() {
  return (
    <div id={styles.container}>
      <h1>Well shucks... this is awkward.</h1>
      <img src="https://i.giphy.com/l1J9EdzfOSgfyueLm.webp" /> <br />
      <Link to="home" id={styles.link}>
        go home
      </Link>
    </div>
  );
}
