import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GeolocalizacionPageRoutingModule } from './geolocalizacion-routing.module';
import { GeolocalizacionPage } from './geolocalizacion.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocalizacionPageRoutingModule
  ],
  declarations: [GeolocalizacionPage]
})
export class GeolocalizacionPageModule {}
