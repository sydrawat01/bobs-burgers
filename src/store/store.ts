import { configureStore } from '@reduxjs/toolkit';

import BurgerReducer from './reducers/burgerSlice';
import OrderReducer from './reducers/orderSlice';
import NewOrderReducer from './reducers/newOrderSlice';

export const store = configureStore({
  reducer: {
    burger: BurgerReducer,
    order: OrderReducer,
    newOrder: NewOrderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
