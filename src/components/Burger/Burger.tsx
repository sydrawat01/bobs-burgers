import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Ingredients } from '../../models/Burger';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.module.css';

const Burger: FC<{ items: Ingredients }> = (props) => {
  const transformedIngredients = Object.keys(props.items.ingredients)
    .map((ingredientKey) =>
      [...Array(props.items.ingredients[ingredientKey])].map((_) => (
        <BurgerIngredient key={uuidv4()} type={ingredientKey} />
      ))
    )
    .reduce((arr, el) => arr.concat(el), []);

  const emptyMsg = <p>Please add ingredients!</p>;

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients.length === 0 ? emptyMsg : transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
