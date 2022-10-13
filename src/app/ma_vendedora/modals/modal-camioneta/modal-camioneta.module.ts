import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCamionetaPageRoutingModule } from './modal-camioneta-routing.module';

import { ModalCamionetaPage } from './modal-camioneta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCamionetaPageRoutingModule
  ],
  declarations: [ModalCamionetaPage]
})
export class ModalCamionetaPageModule {}
