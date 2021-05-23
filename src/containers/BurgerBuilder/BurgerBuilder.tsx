import { FC, useState } from 'react';
import { Ingredients } from '../../models/Burger';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

type prices = { [key: string]: number };

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  onion: 0.4,
  tomato: 0.5,
} as prices;

const initialState = {
  ingredients: {
    tomato: 0,
    onion: 0,
    cheese: 0,
    meat: 0,
    salad: 0,
  },
  totalPrice: 4,
};

const BurgerBuilder: FC = () => {
  const [ingredients, setIngredients] = useState<Ingredients>(initialState);

  const addIngredientHandler = (ingredient: string) => {
    setIngredients((prevState) => {
      const oldCount = prevState.ingredients[ingredient];
      const updatedCount = oldCount + 1;
      const updatedIngredients = { ...prevState.ingredients };
      updatedIngredients[ingredient] = updatedCount;
      const oldPrice = prevState.totalPrice;
      const priceAddition = INGREDIENT_PRICES[ingredient];
      const newPrice = oldPrice + priceAddition;
      return { ingredients: updatedIngredients, totalPrice: newPrice };
    });
  };

  const removeIngredientHandler = () => {};

  return (
    <div style={{ paddingTop: '25px', background: '#fbe6a6' }}>
      <Burger items={ingredients} />
      <BuildControls items={ingredients} addIngredient={addIngredientHandler} />
    </div>
  );
};

export default BurgerBuilder;
