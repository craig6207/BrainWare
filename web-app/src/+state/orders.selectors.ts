import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ORDERS_FEATURE_KEY, OrdersState } from './orders.reducer';

export const selectOrderState =
  createFeatureSelector<OrdersState>(ORDERS_FEATURE_KEY);

export const getOrders = createSelector(
  selectOrderState,
  (state: OrdersState) => state.orders
);
