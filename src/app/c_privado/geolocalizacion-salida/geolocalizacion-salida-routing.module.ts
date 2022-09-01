import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeolocalizacionSalidaPage } from './geolocalizacion-salida.page';

const routes: Routes = [
  {
    path: '',
    component: GeolocalizacionSalidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeolocalizacionSalidaPageRoutingModule {}
