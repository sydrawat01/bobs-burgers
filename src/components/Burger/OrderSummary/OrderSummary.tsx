import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';

import { Ingredients } from '../../../models/Burger';

import Button from '../../UI/Button/Button';

import classes from './OrderSummary.module.css';

const OrderSummary: FC<{ ingredients: Ingredients; close: () => void }> = (
  props
) => {
  const ing = props.ingredients.ingredients;
  const ingSummary = Object.keys(ing).map((igKey) =>
    ing[igKey] > 0 ? (
      <li key={uuidv4()}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}:</span>{' '}
        {ing[igKey]}
      </li>
    ) : null
  );

  const history = useHistory();
  const continuePurchase = () => {
    history.replace('/checkout');
  };
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
      <Button btnType="Danger" onClick={props.close}>
        CANCEL
      </Button>
      <Button btnType="Success" onClick={continuePurchase}>
        CONTINUE
      </Button>
    </>
  );
};

export default OrderSummary;
