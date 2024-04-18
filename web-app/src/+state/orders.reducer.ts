import { Order } from 'src/models/order';
import * as OrdersActions from './orders.actions';
import { Action, createReducer, on } from '@ngrx/store';
export const ORDERS_FEATURE_KEY = 'orders';

export interface OrdersState {
  loaded: boolean;
  orders: Order[];
}

export interface OrdersPartialState {
  readonly [ORDERS_FEATURE_KEY]: OrdersState;
}

export const initialOrdersState: OrdersState = {
  loaded: true,
  orders: [],
};

const reducer = createReducer(
  initialOrdersState,
  on(OrdersActions.setOrders, (state, { orders }) => ({
    ...state,
    orders,
  }))
);

export function createOrdersReducer(
  state: OrdersState | undefined,
  action: Action
) {
  return reducer(state, action);
}
