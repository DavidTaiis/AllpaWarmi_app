import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilMAPageRoutingModule } from './perfil-ma-routing.module';

import { PerfilMAPage } from './perfil-ma.page';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { GooglemapsModule } from './../../../googlemaps/googlemaps/googlemaps.module';

@NgModule({

  imports: [
    ReactiveFormsModule,
    NgxStarRatingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilMAPageRoutingModule,
    GooglemapsModule
  ],
  declarations: [PerfilMAPage]
})
export class PerfilMAPageModule {}
