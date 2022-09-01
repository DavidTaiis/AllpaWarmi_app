import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeolocalizacionLlegadaPageRoutingModule } from './geolocalizacion-llegada-routing.module';

import { GeolocalizacionLlegadaPage } from './geolocalizacion-llegada.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocalizacionLlegadaPageRoutingModule
  ],
  declarations: [GeolocalizacionLlegadaPage]
})
export class GeolocalizacionLlegadaPageModule {}
