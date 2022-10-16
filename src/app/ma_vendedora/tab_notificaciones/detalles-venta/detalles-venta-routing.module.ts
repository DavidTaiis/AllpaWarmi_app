import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesVentaPage } from './detalles-venta.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesVentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesVentaPageRoutingModule {}
