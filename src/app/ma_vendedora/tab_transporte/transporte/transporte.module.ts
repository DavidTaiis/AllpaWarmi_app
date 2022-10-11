import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransportePageRoutingModule } from './transporte-routing.module';

import { TransportePage } from './transporte.page';
import { BusModule } from '../../componets/bus/bus.module';
import { CamionetaModule } from '../../componets/camioneta/camioneta.module';
import { PrivadoModule } from '../../componets/privado/privado.module';
import { CompartidoModule } from '../../componets/compartido/compartido.module';
import { NoticiasModule } from '../../componets/noticias/noticias.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusModule,
    CamionetaModule,
    PrivadoModule,
    CompartidoModule,
    NoticiasModule,
    TransportePageRoutingModule
  ],
  declarations: [TransportePage]
})
export class TransportePageModule {}
