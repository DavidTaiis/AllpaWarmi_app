import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabNotificacionesPageRoutingModule } from './tab-notificaciones-routing.module';

import { TabNotificacionesPage } from './tab-notificaciones.page';
import { NotificacionesComponent } from 'src/app/c_camioneta/componets/notificaciones/notificaciones.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabNotificacionesPageRoutingModule
  ],
  declarations: [TabNotificacionesPage, NotificacionesComponent]
})
export class TabNotificacionesPageModule {}
