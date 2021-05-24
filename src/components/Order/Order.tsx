import { FC } from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Order.module.css';

const Order: FC<{
  ingredients: { [x: string]: number };
  price: number;
}> = (props) => {
  const ingredients = props.ingredients;
  const orderDetails = Object.keys(ingredients).map((igKey) => {
    return (
      <span
        key={igKey}
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 7px ',
          padding: '5px',
          color: '#EB9F31',
          fontSize: '1rem',
        }}
      >
        {igKey}: {ingredients[igKey]}
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <div className={classes.OrderLogo}>
        <img src={burgerLogo} alt="BurgerBuilder" />
      </div>

      <div className={classes.OrderInfo}>
        <p className={classes.OrderIngredients}>Ingredients:</p>
        {orderDetails}

        <p className={classes.OrderPrice}>
          Price:<strong> ${Number.parseFloat(props.price.toFixed(2))} </strong>
        </p>
      </div>
    </div>
  );
};

export default Order;
