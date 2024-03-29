import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilMaPageRoutingModule } from './perfil-ma-routing.module';

import { PerfilMaPage } from './perfil-ma.page';
import { ReactiveFormsModule } from '@angular/forms';
import { GooglemapsModule } from './../../../googlemaps/googlemaps/googlemaps.module';


@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    GooglemapsModule,
    PerfilMaPageRoutingModule
  ],
  declarations: [PerfilMaPage]
})
export class PerfilMaPageModule {}
