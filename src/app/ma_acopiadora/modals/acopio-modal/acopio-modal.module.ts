import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcopioModalPageRoutingModule } from './acopio-modal-routing.module';

import { AcopioModalPage } from './acopio-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcopioModalPageRoutingModule
  ],
  declarations: [AcopioModalPage]
})
export class AcopioModalPageModule {}
