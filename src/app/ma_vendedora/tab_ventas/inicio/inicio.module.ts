import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { VentasModule } from '../../componets/ventas/ventas.module';
import { ComercializacionModule } from '../../componets/comercializacion/comercializacion.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentasModule,
    ComercializacionModule,
    InicioPageRoutingModule
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}
