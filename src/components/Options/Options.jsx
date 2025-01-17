import styles from './Options.module.css';

function Options({ feedback, handleFeedback, handleReset, isReset = false }) {
  const btnOptions = Object.keys(feedback);
  return (
    <ul className={styles.listBtn}>
      {btnOptions.map(item => (
        <li key={item}>
          <button
            className={styles.optionBtn}
            type="button"
            onClick={() => handleFeedback(item)}
          >
            {item}
          </button>
        </li>
      ))}
      {isReset && (
        <li key="reset">
          <button
            className={styles.optionBtn}
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}

export default Options;
