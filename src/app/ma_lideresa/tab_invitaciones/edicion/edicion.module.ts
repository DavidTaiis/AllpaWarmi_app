import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EdicionPageRoutingModule } from './edicion-routing.module';
import { EdicionPage } from './edicion.page';
import { GooglemapsModule } from './../../../googlemaps/googlemaps/googlemaps.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GooglemapsModule,
    EdicionPageRoutingModule
  ],
  declarations: [EdicionPage]
})
export class EdicionPageModule {}
