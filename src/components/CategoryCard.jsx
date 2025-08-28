import styles from './CategoryCard.module.css';

const CategoryCard = ({ name, onClick }) => (
  <div className={styles.card} onClick={onClick}>
    <h3>{name}</h3>
  </div>
);


export default CategoryCard;
