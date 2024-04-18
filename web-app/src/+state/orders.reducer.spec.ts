import { createOrdersReducer, initialOrdersState } from './orders.reducer';
import * as OrdersActions from './orders.actions';
import { Order } from 'src/models/order';

describe('OrdersReducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = { type: 'Unknown' } as any;
      const state = createOrdersReducer(undefined, action);

      expect(state).toBe(initialOrdersState);
    });
  });

  describe('setOrders', () => {
    it('should update the state with new orders', () => {
      const orders: Order[] = [
        {
          id: 1,
          description: 'mock description',
          orderTotal: 123,
          orderProduct: [],
        },
      ];
      const action = OrdersActions.setOrders({ orders: orders });
      const state = createOrdersReducer(initialOrdersState, action);

      expect(state.orders).toEqual(orders);
      expect(state.loaded).toBe(true);
    });
  });
});
