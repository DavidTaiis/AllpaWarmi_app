import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListaPageRoutingModule } from './lista-routing.module';
import { ListaPage } from './lista.page';
import { GooglemapsModule } from './../../../googlemaps/googlemaps/googlemaps.module';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPageRoutingModule,
    GooglemapsModule
  ],
  declarations: [ListaPage]
})
export class ListaPageModule {}
