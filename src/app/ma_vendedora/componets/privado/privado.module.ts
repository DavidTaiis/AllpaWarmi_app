import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivadoComponent } from './privado.component';
import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';
import { GooglemapsModule } from './../../../googlemaps/googlemaps/googlemaps.module';


@NgModule({
  declarations: [
   PrivadoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    GooglemapsModule,
  ],
  exports:[
    PrivadoComponent
  ]
})
export class PrivadoModule { }