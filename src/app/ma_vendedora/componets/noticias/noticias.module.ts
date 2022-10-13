import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './noticias.component';
import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';
import { GooglemapsModule } from './../../../googlemaps/googlemaps/googlemaps.module';


@NgModule({
  declarations: [
    NoticiasComponent
  ],
  imports: [
    GooglemapsModule,
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports:[
    NoticiasComponent
  ]
})
export class NoticiasModule { }