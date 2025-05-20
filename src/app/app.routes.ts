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
  {
    path: 'dominic',
    loadComponent: () => import('./dominic/dominic.page').then( m => m.DominicPage)
  },
  {
    path: 'pinto',
    loadComponent: () => import('./pinto/pinto.page').then( m => m.PintoPage)
  },
  {
    path: 'stpaul',
    loadComponent: () => import('./stpaul/stpaul.page').then( m => m.StpaulPage)
  },
  {
    path: 'dragut',
    loadComponent: () => import('./dragut/dragut.page').then( m => m.DragutPage)
  },
];
