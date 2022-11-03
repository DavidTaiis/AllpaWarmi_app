import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeolocalizacionPageRoutingModule } from './geolocalizacion-routing.module';

import { GeolocalizacionPage } from './geolocalizacion.page';
import { GooglemapsModule } from './../../googlemaps/googlemaps/googlemaps.module';

@NgModule({
  

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GeolocalizacionPageRoutingModule,
    GooglemapsModule
  ],
  declarations: [GeolocalizacionPage]
})
export class GeolocalizacionPageModule {}
