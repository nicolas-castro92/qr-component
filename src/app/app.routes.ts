import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'card',
    loadComponent: () => import('./card/card/card').then((c) => c.Card),
  },
  {
    path:'**',
    redirectTo:'card'
  }
];
