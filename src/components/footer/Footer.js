import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.logo}>Gangadhar</h4>
      <h4 className={styles.text}>
        Student Mitra Organization © All rights reserved.
      </h4>
    </div>
  );
};

export default Footer;