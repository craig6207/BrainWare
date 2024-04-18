import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Order } from 'src/models/order';
import * as OrdersActions from './orders.actions';
import * as OrdersSelectors from './orders.selectors';

@Injectable()
export class OrdersFacade {
  private readonly store = inject(Store);

  orders = this.store.selectSignal(OrdersSelectors.getOrders);

  setOrders(orders: Order[]) {
    this.store.dispatch(OrdersActions.setOrders({ orders }));
  }
}
