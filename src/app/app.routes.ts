import { Hero } from './pages/hero/hero';
import { ProductCard } from './pages/product-card/product-card';
import { Routes } from '@angular/router';
import { UserCard } from './pages/user-card/user-card';
import { Practica } from './pages/practica/practica';
import { RickListComponent } from './pages/rick-list/rick-list';
import { Usuarios } from './pages/usuarios/usuarios';

export const routes: Routes = [
  {
    path: 'user', // 1. Comprueba si es '/user'
    component: UserCard,
  },
  {
    path: 'product', // 2. Comprueba si es '/product'
    component: ProductCard,
  },
  {
    path: 'hero', // 3. Comprueba si es '/hero'
    component: Hero,
  },
  {
    path: 'practica',
    component: Practica,
  },
  {
    path: 'usuarios',
    component: Usuarios,
  },
  {
    path: 'morty',
    component: RickListComponent,
  },
  {
    // 4. Si NO coincide con ninguna de las anteriores,
    //    coincide con '**' y redirige a 'hero'.
    path: '**',
    redirectTo: 'hero',
  },
];
