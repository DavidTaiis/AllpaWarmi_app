import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeolocalizacionPageRoutingModule } from './geolocalizacion-routing.module';

import { GeolocalizacionPage } from './geolocalizacion.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GooglemapsModule } from './../../googlemaps/googlemaps/googlemaps.module';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocalizacionPageRoutingModule,
    GooglemapsModule
  ],
  declarations: [GeolocalizacionPage]
})
export class GeolocalizacionPageModule {}
