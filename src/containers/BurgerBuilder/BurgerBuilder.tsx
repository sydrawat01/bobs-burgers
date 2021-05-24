import { FC, useState } from 'react';
import { Ingredients } from '../../models/Burger';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
  totalPrice: 4.0,
} as Ingredients;

const BurgerBuilder: FC = () => {
  const [ingredients, setIngredients] = useState<Ingredients>(initialState);
  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const orderHandler = () => {
    setShowModal(true);
  };

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

  const removeIngredientHandler = (ingredient: string) => {
    setIngredients((prevState) => {
      const oldCount = prevState.ingredients[ingredient];
      let updatedCount;
      if (oldCount <= 0) updatedCount = 0;
      else updatedCount = oldCount - 1;
      const updatedIngredients = { ...prevState.ingredients };
      updatedIngredients[ingredient] = updatedCount;
      const oldPrice = prevState.totalPrice;
      const priceDeduction = INGREDIENT_PRICES[ingredient];
      const newPrice = oldPrice - priceDeduction;
      return { ingredients: updatedIngredients, totalPrice: newPrice };
    });
  };

  const disabledInfo = { ...ingredients.ingredients };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0 ? 1 : 0;
  }

  return (
    <div style={{ paddingTop: '25px', background: '#fbe6a6' }}>
      <Burger items={ingredients} />
      <BuildControls
        items={ingredients}
        addIngredient={addIngredientHandler}
        removeIngredient={removeIngredientHandler}
        disabled={disabledInfo}
        order={orderHandler}
      />
      <Modal show={showModal} close={closeModalHandler}>
        <OrderSummary ingredients={ingredients} close={closeModalHandler} />
      </Modal>
    </div>
  );
};

export default BurgerBuilder;
