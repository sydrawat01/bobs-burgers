import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { RootState } from '../store';

import { Order } from '../../models/Order';

interface NewOrderState {
  loading?: boolean;
  error?: boolean;
}

const initialState: NewOrderState = {
  loading: false,
  error: false,
};

const newOrderSlice = createSlice({
  name: 'New Order',
  initialState,
  reducers: {
    sendOrder(state: NewOrderState) {
      state.loading = true;
    },
    sendOrderSuccess(state: NewOrderState) {
      state.loading = false;
      state.error = false;
    },
    sendOrderFailue(state: NewOrderState) {
      state.loading = false;
      state.error = true;
    },
  },
});

export default newOrderSlice.reducer;
export const { sendOrder, sendOrderSuccess, sendOrderFailue } =
  newOrderSlice.actions;
export const newOrderSelector = (state: RootState) => state.newOrder;

export const placeOrder = (order: Order) => {
  return async (dispatch: Dispatch) => {
    dispatch(sendOrder());
    try {
      const response = await fetch(process.env.REACT_APP_ORDERS!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });
      if (!response.ok) throw new Error('sending orders failed!');
      dispatch(sendOrderSuccess());
    } catch (err) {
      dispatch(sendOrderFailue());
    }
  };
};
