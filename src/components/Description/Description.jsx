import styles from './Description.module.css';

function Description() {
  return (
    <>
      <h1>Sip Happens Café</h1>
      <p className={styles.infoText}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
}

export default Description;
