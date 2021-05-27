import { FC } from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Order.module.css';

import { BurgerIngredients } from '../../models/Burger';

const Order: FC<{
  ingredients: BurgerIngredients;
  price?: number;
  name?: string;
}> = (props) => {
  const ingredients = props.ingredients;
  const orderDetails = Object.keys(ingredients!).map((igKey) => {
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
        <p className={classes.OrderName}>Order By: {props.name}</p>
        <p className={classes.BurgerIngredients}>Ingredients:</p>
        {orderDetails}

        <p className={classes.OrderPrice}>
          Price:<strong> ${Number.parseFloat(props.price!.toFixed(2))} </strong>
        </p>
      </div>
    </div>
  );
};

export default Order;
