import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamionetasPageRoutingModule } from './camionetas-routing.module';

import { CamionetasPage } from './camionetas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamionetasPageRoutingModule
  ],
  declarations: [CamionetasPage]
})
export class CamionetasPageModule {}
