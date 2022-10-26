import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeolocalizacionSalidaPageRoutingModule } from './geolocalizacion-salida-routing.module';

import { GeolocalizacionSalidaPage } from './geolocalizacion-salida.page';
import { GooglemapsModule } from './../../googlemaps/googlemaps/googlemaps.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocalizacionSalidaPageRoutingModule,
    GooglemapsModule
  ],
  declarations: [GeolocalizacionSalidaPage]
})
export class GeolocalizacionSalidaPageModule {}
