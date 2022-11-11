import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificarMaPageRoutingModule } from './calificar-ma-routing.module';

import { CalificarMaPage } from './calificar-ma.page';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CalificarMaPageRoutingModule
  ],
  declarations: [CalificarMaPage]
})
export class CalificarMaPageModule {}
