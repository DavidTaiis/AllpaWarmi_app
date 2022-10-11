import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusComponent } from './bus.component';
import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BusComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports:[
    BusComponent
  ]
})
export class BusModule { }