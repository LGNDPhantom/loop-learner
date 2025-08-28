import { useState, useEffect } from 'react';
import styles from './QuestionCard.module.css';

const QuestionCard = ({ question, onNext }) => {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const shuffled = [...question.answers].sort(() => Math.random() - 0.5);
    setShuffledAnswers(shuffled);
    setSelected(null);
  }, [question]);

  const handleClick = (answer) => {
    setSelected(answer);
    setTimeout(() => onNext(), 1500);
  };

  const getClassName = (ans) => {
    if (!selected) return styles.answerItem;
    if (ans === selected) return ans.correct ? styles.correct : styles.incorrect;
    if (ans.correct) return styles.correct;
    return styles.answerItem;
  };

  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.questionText}>{question.text}</h2>

      {question.image && (
        <div className={styles.imageWrapper}>
  <img
    src={question.image}
    alt="question visual"
    className={styles.questionImage}
  />
</div>

      )}

      <ul className={styles.answerList}>
        {shuffledAnswers.map((ans, i) => (
          <li
            key={i}
            className={getClassName(ans)}
            onClick={() => handleClick(ans)}
            style={{ pointerEvents: selected ? 'none' : 'auto' }}
          >
            {ans.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;
