import { Route } from '@angular/router';
import { ordersResolver } from '../resolvers/orders.resolver';
import { ErrorComponent } from './components/error/error.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'orders',
    pathMatch: 'full',
  },
  {
    path: 'orders',
    resolve: {
      orders: ordersResolver,
    },
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
];
