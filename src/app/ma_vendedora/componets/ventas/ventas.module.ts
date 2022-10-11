import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasComponent } from './ventas.component';
import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';
import { GooglemapsModule } from '../../../googlemaps/googlemaps/googlemaps.module';


@NgModule({
  declarations: [
  VentasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    GooglemapsModule,
  ],
  exports:[
    VentasComponent
  ]
})
export class VentasModule { }