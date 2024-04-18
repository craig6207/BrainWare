import { createAction, props } from '@ngrx/store';
import { Order } from 'src/models/order';

export const setOrders = createAction(
  '[Order page set orders] Set Orders',
  props<{ orders: Order[] }>()
);
