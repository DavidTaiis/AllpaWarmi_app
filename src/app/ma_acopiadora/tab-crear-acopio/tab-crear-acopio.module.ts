import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabCrearAcopioPageRoutingModule } from './tab-crear-acopio-routing.module';

import { TabCrearAcopioPage } from './tab-crear-acopio.page';

import { GooglemapsModule } from './../../googlemaps/googlemaps/googlemaps.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GooglemapsModule,
    TabCrearAcopioPageRoutingModule
  ],
  declarations: [TabCrearAcopioPage]
})
export class TabCrearAcopioPageModule {}
