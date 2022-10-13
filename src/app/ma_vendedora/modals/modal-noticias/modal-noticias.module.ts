import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNoticiasPageRoutingModule } from './modal-noticias-routing.module';

import { ModalNoticiasPage } from './modal-noticias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalNoticiasPageRoutingModule
  ],
  declarations: [ModalNoticiasPage]
})
export class ModalNoticiasPageModule {}
