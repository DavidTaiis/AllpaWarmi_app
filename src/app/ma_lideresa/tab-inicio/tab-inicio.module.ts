import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabInicioPageRoutingModule } from './tab-inicio-routing.module';
import { TabInicioPage } from './tab-inicio.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GooglemapsModule } from './../../googlemaps/googlemaps/googlemaps.module';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
