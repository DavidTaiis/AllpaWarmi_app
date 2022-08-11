import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilMaPageRoutingModule } from './perfil-ma-routing.module';

import { PerfilMaPage } from './perfil-ma.page';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    ReactiveFormsModule,
    NgxStarRatingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilMaPageRoutingModule
  ],
  declarations: [PerfilMaPage]
})
export class PerfilMaPageModule {}
