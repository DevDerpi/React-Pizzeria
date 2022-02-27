import styles from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Delicious Pizza, Delivered To You</h2>
      <p>
        Choose your favorite Pizza from our broad selection of available Pizzas
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our Pizzas are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;