import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesAcopioPageRoutingModule } from './detalles-acopio-routing.module';

import { DetallesAcopioPage } from './detalles-acopio.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesAcopioPageRoutingModule
  ],
  declarations: [DetallesAcopioPage]
})
export class DetallesAcopioPageModule {}
