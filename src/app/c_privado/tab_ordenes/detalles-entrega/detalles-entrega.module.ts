import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesEntregaPageRoutingModule } from './detalles-entrega-routing.module';

import { DetallesEntregaPage } from './detalles-entrega.page';
import { GooglemapsModule } from './../../../googlemaps/googlemaps/googlemaps.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GooglemapsModule,
    DetallesEntregaPageRoutingModule
  ],
  declarations: [DetallesEntregaPage]
})
export class DetallesEntregaPageModule {}
