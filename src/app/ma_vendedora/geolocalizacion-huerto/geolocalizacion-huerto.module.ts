import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeolocalizacionHuertoPageRoutingModule } from './geolocalizacion-huerto-routing.module';

import { GeolocalizacionHuertoPage } from './geolocalizacion-huerto.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocalizacionHuertoPageRoutingModule
  ],
  declarations: [GeolocalizacionHuertoPage]
})
export class GeolocalizacionHuertoPageModule {}
