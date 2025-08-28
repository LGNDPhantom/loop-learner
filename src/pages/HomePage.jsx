import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';

const categories = Object.keys(require('../data/questionBank').questions);

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      {categories.map((cat) => (
        <CategoryCard key={cat} name={cat} onClick={() => navigate(`/quiz/${cat}`)} />
      ))}
    </div>
  );
};

export default HomePage;
