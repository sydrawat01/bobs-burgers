import { FC } from 'react';
import { Ingredients } from '../../../models/Burger';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.module.css';

const controls = [
  { label: 'Tomato', type: 'tomato' },
  { label: 'Onion', type: 'onion' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Salad', type: 'salad' },
];

const BuildControls: FC<{
  items: Ingredients;
  addIngredient: (ingredient: string) => void;
}> = (props) => {
  const price = `$${props.items.totalPrice.toFixed(2)}`;

  const buildControls = controls.map((item) => (
    <BuildControl
      key={item.label}
      label={item.label}
      added={props.addIngredient.bind(null, item.type)}
      disabled={false}
    />
  ));

  return (
    <section className={classes.BuildControls}>
      <p className={classes.OrderPrice}>
        Current Price: <strong>{price}</strong>
      </p>
      {buildControls}
      <button className={classes.OrderButton}>ORDER NOW</button>
    </section>
  );
};

export default BuildControls;
