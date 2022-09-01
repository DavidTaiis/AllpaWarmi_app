import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { GooglemapsModule } from './../../../googlemaps/googlemaps/googlemaps.module';


@NgModule({
 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    GooglemapsModule
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}
