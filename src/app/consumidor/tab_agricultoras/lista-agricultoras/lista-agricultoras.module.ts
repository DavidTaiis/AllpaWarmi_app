import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaAgricultorasPageRoutingModule } from './lista-agricultoras-routing.module';

import { ListaAgricultorasPage } from './lista-agricultoras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaAgricultorasPageRoutingModule
  ],
  declarations: [ListaAgricultorasPage]
})
export class ListaAgricultorasPageModule {}
