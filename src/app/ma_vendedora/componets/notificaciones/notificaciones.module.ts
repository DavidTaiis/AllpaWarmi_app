import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacionesComponent } from './notificaciones.component';
import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';
import { GooglemapsModule } from '../../../googlemaps/googlemaps/googlemaps.module';


@NgModule({
  declarations: [
  NotificacionesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    GooglemapsModule,
  ],
  exports:[
    NotificacionesComponent
  ]
})
export class NotificacionesModule { }