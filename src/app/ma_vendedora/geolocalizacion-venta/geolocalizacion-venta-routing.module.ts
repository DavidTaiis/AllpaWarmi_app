import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeolocalizacionVentaPage } from './geolocalizacion-venta.page';

const routes: Routes = [
  {
    path: '',
    component: GeolocalizacionVentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeolocalizacionVentaPageRoutingModule {}
