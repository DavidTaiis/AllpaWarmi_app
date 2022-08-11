import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalificarMaPage } from './calificar-ma.page';

const routes: Routes = [
  {
    path: '',
    component: CalificarMaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalificarMaPageRoutingModule {}
