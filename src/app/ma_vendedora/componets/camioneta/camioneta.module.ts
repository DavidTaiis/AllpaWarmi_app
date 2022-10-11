import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamionetaComponent } from './camioneta.component';
import { IonicModule } from '@ionic/angular';
import { GooglemapsModule } from './../../../googlemaps/googlemaps/googlemaps.module';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CamionetaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    GooglemapsModule
  ],
  exports:[
    CamionetaComponent
  ]
})
export class CamionetaModule { }