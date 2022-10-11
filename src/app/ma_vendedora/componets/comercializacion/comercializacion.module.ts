import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComercializacionComponent } from './comercializacion.component';
import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';
import { GooglemapsModule } from '../../../googlemaps/googlemaps/googlemaps.module';


@NgModule({
  declarations: [
   ComercializacionComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    GooglemapsModule,
  ],
  exports:[
    ComercializacionComponent
  ]
})
export class ComercializacionModule { }