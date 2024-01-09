import styles from "./Footer.module.css";
import gitHubLogo from "../../assets/github-logo.webp";

export default function Footer() {
  return (
    <footer>
      <a href="https://github.com/aconstas" target="_blank" rel="noopener noreferrer">
        <img src={gitHubLogo} id={styles.githubLogo} />
      </a>
    </footer>
  );
}
