import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Ingredients } from '../../../models/Burger';

import classes from './OrderSummary.module.css';

const OrderSummary: FC<{ ingredients: Ingredients }> = (props) => {
  const ing = props.ingredients.ingredients;
  const ingSummary = Object.keys(ing).map((igKey) =>
    ing[igKey] > 0 ? (
      <li key={uuidv4()}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}:</span>{' '}
        {ing[igKey]}
      </li>
    ) : null
  );
  return (
    <>
      <h3 className={classes.OrderSummaryTitle}>Your Order</h3>
      <p className={classes.OrderSummarySubTitle}>
        Delicious burger with the ingredients:
      </p>
      <ul className={classes.OrderSummaryList}>{ingSummary}</ul>
      <p className={classes.OrderSummaryTotal}>
        Price: ${props.ingredients.totalPrice.toFixed(2)}
      </p>
      <p className={classes.OrderSummaryText}>Continue to Checkout?</p>
    </>
  );
};

export default OrderSummary;
