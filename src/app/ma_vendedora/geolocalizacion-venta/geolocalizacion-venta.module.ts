import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeolocalizacionVentaPageRoutingModule } from './geolocalizacion-venta-routing.module';

import { GeolocalizacionVentaPage } from './geolocalizacion-venta.page';
import { GooglemapsModule } from './../../googlemaps/googlemaps/googlemaps.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GooglemapsModule,
    GeolocalizacionVentaPageRoutingModule
  ],
  declarations: [GeolocalizacionVentaPage]
})
export class GeolocalizacionVentaPageModule {}
