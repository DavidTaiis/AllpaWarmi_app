import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNotificacionesPageRoutingModule } from './modal-notificaciones-routing.module';

import { ModalNotificacionesPage } from './modal-notificaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalNotificacionesPageRoutingModule
  ],
  declarations: [ModalNotificacionesPage]
})
export class ModalNotificacionesPageModule {}
