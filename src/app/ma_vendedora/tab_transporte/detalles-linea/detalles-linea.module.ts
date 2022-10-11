import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesLineaPageRoutingModule } from './detalles-linea-routing.module';

import { DetallesLineaPage } from './detalles-linea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesLineaPageRoutingModule
  ],
  declarations: [DetallesLineaPage]
})
export class DetallesLineaPageModule {}
