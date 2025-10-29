import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { Order } from './order/order';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: Products },
  { path: 'order', component: Order }
];
