import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeolocalizacionLlegadaPageRoutingModule } from './geolocalizacion-llegada-routing.module';

import { GeolocalizacionLlegadaPage } from './geolocalizacion-llegada.page';
import { GooglemapsModule } from './../../googlemaps/googlemaps/googlemaps.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocalizacionLlegadaPageRoutingModule,
    GooglemapsModule
  ],
  declarations: [GeolocalizacionLlegadaPage]
})
export class GeolocalizacionLlegadaPageModule {}
