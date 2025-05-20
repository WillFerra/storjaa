import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'la-valette',
    loadComponent: () => import('./la-valette/la-valette.page').then( m => m.LaValettePage)
  },
];
