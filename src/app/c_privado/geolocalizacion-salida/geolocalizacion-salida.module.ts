import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeolocalizacionSalidaPageRoutingModule } from './geolocalizacion-salida-routing.module';

import { GeolocalizacionSalidaPage } from './geolocalizacion-salida.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocalizacionSalidaPageRoutingModule
  ],
  declarations: [GeolocalizacionSalidaPage]
})
export class GeolocalizacionSalidaPageModule {}
