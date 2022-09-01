import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanificacionPageRoutingModule } from './planificacion-routing.module';

import { PlanificacionPage } from './planificacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanificacionPageRoutingModule
  ],
  declarations: [PlanificacionPage]
})
export class PlanificacionPageModule {}
