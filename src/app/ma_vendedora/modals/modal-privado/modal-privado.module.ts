import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPrivadoPageRoutingModule } from './modal-privado-routing.module';

import { ModalPrivadoPage } from './modal-privado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPrivadoPageRoutingModule
  ],
  declarations: [ModalPrivadoPage]
})
export class ModalPrivadoPageModule {}
