import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesEntregaPageRoutingModule } from './detalles-entrega-routing.module';

import { DetallesEntregaPage } from './detalles-entrega.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesEntregaPageRoutingModule
  ],
  declarations: [DetallesEntregaPage]
})
export class DetallesEntregaPageModule {}
