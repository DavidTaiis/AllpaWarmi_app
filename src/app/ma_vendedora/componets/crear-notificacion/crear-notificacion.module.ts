import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearNotificacionComponent } from './crear-notificacion.component';
import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';
import { GooglemapsModule } from '../../../googlemaps/googlemaps/googlemaps.module';


@NgModule({
  declarations: [
  CrearNotificacionComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    GooglemapsModule,
  ],
  exports:[
    CrearNotificacionComponent
  ]
})
export class CrearNotificacionModule { }