export interface Ingredients {
  ingredients: {
    [key: string]: number;
  };
  totalPrice: number;
}

export interface BurgerIngredients {
  [ingredient: string]: number;
}
