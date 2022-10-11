import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeolocalizacionHuertoPageRoutingModule } from './geolocalizacion-huerto-routing.module';

import { GeolocalizacionHuertoPage } from './geolocalizacion-huerto.page';
import { GooglemapsModule } from './../../googlemaps/googlemaps/googlemaps.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GooglemapsModule,
    GeolocalizacionHuertoPageRoutingModule
  ],
  declarations: [GeolocalizacionHuertoPage]
})
export class GeolocalizacionHuertoPageModule {}
