export interface OrderIngredients {
  [ingredient: string]: number;
}

export interface Order {
  ingredients?: OrderIngredients;
  customer?: {
    address?: {
      street?: string;
      zip?: string;
      city?: string;
    };
    email?: string;
    name?: string;
  };
  price?: number;
}

export interface OrderData {
  [key: string]: Order;
}
