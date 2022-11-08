import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallescarritoComponent } from './detallescarrito.component';
import { IonicModule } from '@ionic/angular';
import { GooglemapsModule } from '../../../googlemaps/googlemaps/googlemaps.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DetallescarritoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    GooglemapsModule,
    ReactiveFormsModule
  ],
  exports:[
    DetallescarritoComponent
  ]
})
export class DetallescarritoModule { }