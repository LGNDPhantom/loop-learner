import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { questions } from '../data/questionBank';
import QuestionCard from '../components/QuestionCard';
import styles from './QuizPage.module.css';

const QuizPage = () => {
  const { category } = useParams();
  const [remaining, setRemaining] = useState([]);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const pool = [...questions[category]];
    const shuffled = pool.sort(() => Math.random() - 0.5);
    setRemaining(shuffled);
    setCurrent(shuffled[0]);
  }, [category]);

  const loadNext = () => {
  if (remaining.length <= 1) {
    // Reshuffle and restart, excluding current
    const pool = [...questions[category]].filter(q => q !== current);
    const reshuffled = pool.length ? pool.sort(() => Math.random() - 0.5) : [...questions[category]].sort(() => Math.random() - 0.5);
    setRemaining(reshuffled);
    setCurrent(reshuffled[0]);
  } else {
    const nextPool = remaining.slice(1);
    setRemaining(nextPool);
    setCurrent(nextPool[0]);
  }
};


  return (
    <div className={styles.pageContainer}>
      {current ? <QuestionCard question={current} onNext={loadNext} /> : <p>Loading...</p>}
    </div>
  );
};

export default QuizPage;


