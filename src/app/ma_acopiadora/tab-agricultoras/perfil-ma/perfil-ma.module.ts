import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilMaPageRoutingModule } from './perfil-ma-routing.module';

import { PerfilMaPage } from './perfil-ma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilMaPageRoutingModule
  ],
  declarations: [PerfilMaPage]
})
export class PerfilMaPageModule {}
