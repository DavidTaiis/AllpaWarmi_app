import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalHuertoVentaPage } from './modal-huerto-venta.page';

const routes: Routes = [
  {
    path: '',
    component: ModalHuertoVentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalHuertoVentaPageRoutingModule {}
