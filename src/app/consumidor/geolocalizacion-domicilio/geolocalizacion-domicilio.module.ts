import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeolocalizacionDomicilioPageRoutingModule } from './geolocalizacion-domicilio-routing.module';

import { GeolocalizacionDomicilioPage } from './geolocalizacion-domicilio.page';
import { GooglemapsModule } from './../../googlemaps/googlemaps/googlemaps.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocalizacionDomicilioPageRoutingModule,
    GooglemapsModule
  ],
  declarations: [GeolocalizacionDomicilioPage]
})
export class GeolocalizacionDomicilioPageModule {}
