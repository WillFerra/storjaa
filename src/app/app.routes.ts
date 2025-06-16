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
  {
    path: 'laparelli',
    loadComponent: () => import('./laparelli/laparelli.page').then( m => m.LaparelliPage)
  },
  {
    path: 'gilormu',
    loadComponent: () => import('./gilormu/gilormu.page').then( m => m.GilormuPage)
  },
  {
    path: 'preti',
    loadComponent: () => import('./preti/preti.page').then( m => m.PretiPage)
  },
  {
    path: 'staug',
    loadComponent: () => import('./staug/staug.page').then( m => m.StaugPage)
  },
  {
    path: 'vilhena',
    loadComponent: () => import('./vilhena/vilhena.page').then( m => m.VilhenaPage)
  },
  {
    path: 'queenvic',
    loadComponent: () => import('./queenvic/queenvic.page').then( m => m.QueenvicPage)
  },
  {
    path: 'madonna',
    loadComponent: () => import('./madonna/madonna.page').then( m => m.MadonnaPage)
  },
];
