import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntregasComponent } from './entregas.component';
import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';
import { GooglemapsModule } from '../../../googlemaps/googlemaps/googlemaps.module';


@NgModule({
  declarations: [
  EntregasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    GooglemapsModule,
  ],
  exports:[
    EntregasComponent
  ]
})
export class EntregasModule { }