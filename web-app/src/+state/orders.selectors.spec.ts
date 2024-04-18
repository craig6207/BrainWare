import { getOrders, selectOrderState } from './orders.selectors';
import { OrdersState } from './orders.reducer';
import { Order } from 'src/models/order';

describe('OrdersSelectors', () => {
  const initialState: OrdersState = {
    loaded: true,
    orders: [],
  };

  describe('selectOrderState', () => {
    it('should select the order state', () => {
      const state = { orders: initialState };
      expect(selectOrderState(state)).toBe(initialState);
    });
  });

  describe('getOrders', () => {
    it('should select the orders array from the state', () => {
      const orders: Order[] = [
        {
          id: 1,
          description: 'mock description',
          orderTotal: 123,
          orderProduct: [],
        },
      ];
      const state = { orders: { ...initialState, orders } };
      expect(getOrders(state)).toEqual(orders);
    });
  });
});
