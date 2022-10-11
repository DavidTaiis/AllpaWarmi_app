import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalHuertoVentaPageRoutingModule } from './modal-huerto-venta-routing.module';

import { ModalHuertoVentaPage } from './modal-huerto-venta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalHuertoVentaPageRoutingModule
  ],
  declarations: [ModalHuertoVentaPage]
})
export class ModalHuertoVentaPageModule {}
