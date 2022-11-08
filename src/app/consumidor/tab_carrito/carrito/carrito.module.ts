import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarritoPageRoutingModule } from './carrito-routing.module';

import { CarritoPage } from './carrito.page';
import { DetallescarritoModule } from '../../components/detallescarrito/detallescarrito.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarritoPageRoutingModule,
    ReactiveFormsModule,
    DetallescarritoModule
  ],
  declarations: [CarritoPage]
})
export class CarritoPageModule {}
