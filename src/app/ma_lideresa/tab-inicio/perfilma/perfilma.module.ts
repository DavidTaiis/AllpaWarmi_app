import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilmaPageRoutingModule } from './perfilma-routing.module';

import { PerfilmaPage } from './perfilma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilmaPageRoutingModule
  ],
  declarations: [PerfilmaPage]
})
export class PerfilmaPageModule {}
