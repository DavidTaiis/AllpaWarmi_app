import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesEntregaPage } from './detalles-entrega.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesEntregaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesEntregaPageRoutingModule {}
