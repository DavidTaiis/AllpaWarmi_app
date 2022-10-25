import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabInicioPageRoutingModule } from './tab-inicio-routing.module';
import { GooglemapsModule } from './../../googlemaps/googlemaps/googlemaps.module';


import { TabInicioPage } from './tab-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GooglemapsModule,
    IonicModule,
    TabInicioPageRoutingModule
  ],
  declarations: [TabInicioPage]
})
export class TabInicioPageModule {}
