import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovedadesPageRoutingModule } from './novedades-routing.module';

import { NovedadesPage } from './novedades.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovedadesPageRoutingModule
  ],
  declarations: [NovedadesPage]
})
export class NovedadesPageModule {}
