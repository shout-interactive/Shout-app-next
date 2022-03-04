import styles from "./index.module.css";

const Title = ({ title }) => {
  return (
    <div className={styles["title-wrapper"]}>
      <h4 className={styles.title}>{title}</h4>
    </div>
  );
};

export default Title;
