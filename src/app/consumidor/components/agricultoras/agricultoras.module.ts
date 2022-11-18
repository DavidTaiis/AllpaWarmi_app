import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgricultorasComponent } from './agricultoras.component';
import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';
import { GooglemapsModule } from '../../../googlemaps/googlemaps/googlemaps.module';


@NgModule({
  declarations: [
   AgricultorasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    GooglemapsModule,
  ],
  exports:[
    AgricultorasComponent
  ]
})
export class AgricultorasModule { }