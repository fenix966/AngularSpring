import { Routes } from '@angular/router';

export const routes: Routes = [
  {path : '', pathMatch: 'full', redirectTo: 'bolsistas'},
  {
    path: 'bolsistas',
    loadChildren: () => import('./bolsistas/bolsistas.module').then(m => m.BolsistasModule)
  }
];
