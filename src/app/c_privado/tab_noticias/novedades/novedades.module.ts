import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovedadesPageRoutingModule } from './novedades-routing.module';

import { NovedadesPage } from './novedades.page';
import { GooglemapsModule } from './../../../googlemaps/googlemaps/googlemaps.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovedadesPageRoutingModule,
    GooglemapsModule
  ],
  declarations: [NovedadesPage]
})
export class NovedadesPageModule {}
