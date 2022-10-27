import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesVentaPageRoutingModule } from './detalles-venta-routing.module';

import { DetallesVentaPage } from './detalles-venta.page';
import { GooglemapsModule } from './../../../googlemaps/googlemaps/googlemaps.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GooglemapsModule,
    DetallesVentaPageRoutingModule
  ],
  declarations: [DetallesVentaPage]
})
export class DetallesVentaPageModule {}
