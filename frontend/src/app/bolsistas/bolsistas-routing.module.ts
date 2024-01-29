import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolsistasComponent } from './bolsistas/bolsistas.component';

const routes: Routes = [
  {path: '', component: BolsistasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BolsistasRoutingModule { }
