import { configureStore } from '@reduxjs/toolkit';
import BurgerReducer from './reducers/burgerSlice';

export const store = configureStore({
  reducer: {
    burger: BurgerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
