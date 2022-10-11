import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeolocalizacionHuertoPage } from './geolocalizacion-huerto.page';


const routes: Routes = [
  {
    path: '',
    component: GeolocalizacionHuertoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeolocalizacionHuertoPageRoutingModule {}
