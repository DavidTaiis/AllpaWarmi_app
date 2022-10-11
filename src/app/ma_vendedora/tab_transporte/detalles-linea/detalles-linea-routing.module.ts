import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesLineaPage } from './detalles-linea.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesLineaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesLineaPageRoutingModule {}
