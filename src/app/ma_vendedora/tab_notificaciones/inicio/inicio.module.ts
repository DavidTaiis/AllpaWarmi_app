import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { EntregasModule } from '../../componets/entregas/entregas.module';
import { NotificacionesModule } from '../../componets/notificaciones/notificaciones.module';
import { CrearNotificacionModule } from '../../componets/crear-notificacion/crear-notificacion.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntregasModule,
    NotificacionesModule,
    CrearNotificacionModule,
    InicioPageRoutingModule
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}
