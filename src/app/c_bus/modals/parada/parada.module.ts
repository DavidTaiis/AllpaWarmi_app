import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParadaPageRoutingModule } from './parada-routing.module';

import { ParadaPage } from './parada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParadaPageRoutingModule
  ],
  declarations: [ParadaPage]
})
export class ParadaPageModule {}
