import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilMAPageRoutingModule } from './perfil-ma-routing.module';

import { PerfilMAPage } from './perfil-ma.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxStarRatingModule } from 'ngx-star-rating';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    ReactiveFormsModule,
    NgxStarRatingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilMAPageRoutingModule
  ],
  declarations: [PerfilMAPage]
})
export class PerfilMAPageModule {}
