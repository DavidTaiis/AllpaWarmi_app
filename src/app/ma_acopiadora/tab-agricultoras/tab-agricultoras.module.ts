import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabAgricultorasPageRoutingModule } from './tab-agricultoras-routing.module';

import { TabAgricultorasPage } from './tab-agricultoras.page';
import { AgricultorasModule } from './../../ma_vendedora/componets/agricultoras/agricultoras.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabAgricultorasPageRoutingModule,
    AgricultorasModule
  ],
  declarations: [TabAgricultorasPage]
})
export class TabAgricultorasPageModule {}
