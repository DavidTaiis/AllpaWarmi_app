import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAcopioPageRoutingModule } from './modal-acopio-routing.module';

import { ModalAcopioPage } from './modal-acopio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAcopioPageRoutingModule
  ],
  declarations: [ModalAcopioPage]
})
export class ModalAcopioPageModule {}
