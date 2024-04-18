import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { OrdersFacade } from 'src/+state/orders.facade';
import { OrderService } from 'src/services/order/order.service';

export const ordersResolver: ResolveFn<boolean | never> = (route, state) => {
  const orderService = inject(OrderService);
  const orderFacade = inject(OrdersFacade);
  const router = inject(Router);
  const id = route.params['companyId'];
  return orderService.getOrder(id).pipe(
    map((orders) => {
      orderFacade.setOrders(orders);
      return true;
    }),
    catchError(() => {
      router.navigate(['/error']);
      return of(false);
    })
  );
};
