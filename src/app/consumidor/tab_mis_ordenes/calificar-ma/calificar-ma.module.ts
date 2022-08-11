import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificarMaPageRoutingModule } from './calificar-ma-routing.module';

import { CalificarMaPage } from './calificar-ma.page';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    NgxStarRatingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CalificarMaPageRoutingModule
  ],
  declarations: [CalificarMaPage]
})
export class CalificarMaPageModule {}
