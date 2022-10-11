import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidoComponent } from './compartido.component';
import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CompartidoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports:[
    CompartidoComponent
  ]
})
export class CompartidoModule { }