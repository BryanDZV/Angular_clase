import { Hero } from './pages/hero/hero';
import { ProductCard } from './pages/product-card/product-card';
import { Routes } from '@angular/router';
import { UserCard } from './pages/user-card/user-card';

export const routes: Routes = [
  {
    path: '**',
    redirectTo: 'hero',
  },
  {
    path: 'user',
    component: UserCard,
  },
  {
    path: 'product',
    component: ProductCard,
  },
  {
    path: 'hero',
    component: Hero,
  },
];
