import styles from './Footer.module.css';
export default function Footer() {
  return (
    <div className={styles.container}>
      <div>
        <p>&copy; 2024 ZEZO. All rights reserved.</p>
      </div>
      <div className={styles.social}></div>
    </div>
  );
}
