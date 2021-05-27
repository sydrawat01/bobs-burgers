import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

import { Order } from '../../models/Order';

interface OrderState {
  data: Order;
  loading: boolean;
  error: boolean;
}

const initialState: OrderState = {
  data: {},
  loading: false,
  error: false,
};

const orderSlice = createSlice({
  name: 'Orders',
  initialState,
  reducers: {
    getOrders(state: OrderState) {
      state.loading = true;
    },
    getOrdersSuccess(state: OrderState, action: PayloadAction<Order>) {
      state.error = false;
      state.loading = false;
      state.data = action.payload;
    },
    getOrdersFailed(state: OrderState) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { getOrders, getOrdersSuccess, getOrdersFailed } =
  orderSlice.actions;
export default orderSlice.reducer;

export const orderSelector = (state: RootState) => state.order;

export const fetchOrders = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getOrders());

    try {
      const response = await fetch(process.env.REACT_APP_ORDERS!);
      const data = await response.json();
      dispatch(getOrdersSuccess(data));
    } catch (err) {
      dispatch(getOrdersFailed());
    }
  };
};
