import { FC } from 'react';

import classes from './BurgerIngredient.module.css';

const BurgerIngredient: FC<{ type: string | null }> = (props) => {
  let ingredients;
  switch (props.type) {
    case 'bread-top':
      ingredients = (
        <div className={classes.BreadTop}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      );
      break;
    case 'bread-bottom':
      ingredients = (
        <div className={classes.BreadBottom}>
          <div className={classes.Shadow}></div>
        </div>
      );
      break;
    case 'tomato':
      ingredients = <div className={classes.Tomato} />;
      break;
    case 'onion':
      ingredients = <div className={classes.Onion} />;
      break;
    case 'meat':
      ingredients = <div className={classes.Meat} />;
      break;
    case 'cheese':
      ingredients = <div className={classes.Cheese} />;
      break;
    case 'bacon':
      ingredients = <div className={classes.Bacon} />;
      break;
    case 'salad':
      ingredients = <div className={classes.Salad} />;
      break;

    default:
      ingredients = null;
      break;
  }
  return <>{ingredients}</>;
};

export default BurgerIngredient;
