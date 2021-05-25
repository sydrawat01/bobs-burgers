import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ingredients } from '../../models/Burger';

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

export const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    addIngredient(state: Ingredients, action: PayloadAction<string>) {
      const ingredient = action.payload;
      state.ingredients[ingredient] += 1;
      state.totalPrice += INGREDIENT_PRICES[ingredient];
      state.totalPrice = parseFloat(state.totalPrice.toFixed(2));
    },
    removeIngredient(state: Ingredients, action: PayloadAction<string>) {
      const ingredient = action.payload;
      state.ingredients[ingredient] <= 0
        ? (state.ingredients[ingredient] = 0)
        : (state.ingredients[ingredient] -= 1);
      state.totalPrice -= INGREDIENT_PRICES[ingredient];
      state.totalPrice = parseFloat(state.totalPrice.toFixed(2));
    },
    resetOrder(state: Ingredients) {
      state = { ...initialState };
    },
  },
});

export default burgerSlice.reducer;
