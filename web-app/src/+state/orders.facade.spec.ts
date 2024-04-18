import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { OrdersFacade } from './orders.facade';
import * as OrdersActions from './orders.actions';
import { Order } from 'src/models/order';

describe('OrdersFacade', () => {
  let facade: OrdersFacade;
  let store: MockStore;
  let dispatchSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdersFacade, provideMockStore()],
    });

    facade = TestBed.inject(OrdersFacade);
    store = TestBed.inject(MockStore);
    dispatchSpy = spyOn(store, 'dispatch');
  });

  describe('setOrders', () => {
    it('should dispatch a setOrders action', () => {
      const orders: Order[] = [
        {
          id: 1,
          description: 'mock description',
          orderTotal: 123,
          orderProduct: [],
        },
      ];
      facade.setOrders(orders);
      expect(dispatchSpy).toHaveBeenCalledWith(
        OrdersActions.setOrders({ orders })
      );
    });
  });

  describe('orders', () => {
    it('should select getOrders from store with new list', () => {
      const orders: Order[] = [
        {
          id: 1,
          description: 'mock description',
          orderTotal: 123,
          orderProduct: [],
        },
      ];
      let orderList = facade.orders;

      expect(orderList.length).toBe(0);

      store.dispatch(OrdersActions.setOrders({ orders }));
      orderList = facade.orders;
      expect(orderList().length).toBe(1);
    });
  });
});
