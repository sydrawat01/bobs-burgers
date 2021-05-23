import { FC } from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.module.css';

const Burger: FC = () => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="tomato" />
      <BurgerIngredient type="onion" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bacon" />
      <BurgerIngredient type="salad" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
