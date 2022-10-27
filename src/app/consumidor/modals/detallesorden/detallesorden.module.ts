import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesordenPageRoutingModule } from './detallesorden-routing.module';

import { DetallesordenPage } from './detallesorden.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesordenPageRoutingModule
  ],
  declarations: [DetallesordenPage]
})
export class DetallesordenPageModule {}
