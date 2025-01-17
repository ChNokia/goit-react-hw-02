import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import Options from './components/Options/Options';

import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const initialFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedBack] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('votes'));

    return savedFeedback || initialFeedback;
  });

  useEffect(() => {
    localStorage.setItem('votes', JSON.stringify(feedback));
  }, [feedback]);

  let totalFeedback = calculateTotalFeedback(feedback);
  let positiveFeedback = calculatePositiveFeedback(feedback);

  const updateFeedback = feedbackType => {
    setFeedBack(prev => {
      const newFeedback = {
        ...prev,
        [feedbackType]: prev[feedbackType] + 1,
      };

      totalFeedback += 1;
      positiveFeedback = calculatePositiveFeedback(feedback);
      return newFeedback;
    });
  };

  const resetFeedback = () => {
    totalFeedback = 0;
    setFeedBack(initialFeedback);
  };

  function calculateTotalFeedback(feedback) {
    let sum = 0;
    const values = Object.values(feedback);

    values.forEach(num => {
      sum += num;
    });

    return sum;
  }

  function calculatePositiveFeedback(feedback) {
    return Math.round((feedback.good / totalFeedback) * 100);
  }

  return (
    <div className="container">
      <Description />
      <Options
        feedback={feedback}
        handleFeedback={updateFeedback}
        handleReset={resetFeedback}
        isReset={totalFeedback > 0}
      />
      {totalFeedback > 0 && (
        <Feedback
          votesList={feedback}
          totalVotes={totalFeedback}
          positiveVotes={positiveFeedback}
        />
      )}
      {totalFeedback <= 0 && <Notification />}
    </div>
  );
}

export default App;
