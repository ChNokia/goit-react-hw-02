import styles from './Feedback.module.css';

function Feedback({ votesList, totalVotes, positiveVotes }) {
  const keys = Object.keys(votesList);
  return (
    <ul className={styles.listResults}>
      {keys.map(item => {
        return (
          <li key={item}>
            <p className={styles.result}>
              {item}: {votesList[item]}
            </p>
          </li>
        );
      })}
      <li key="total">
        <p className={styles.result}>Total: {totalVotes}</p>
      </li>
      <li key="positive">
        <p className={styles.result}>Positive: {positiveVotes}%</p>
      </li>
    </ul>
  );
}

export default Feedback;
