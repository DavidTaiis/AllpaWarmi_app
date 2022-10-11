import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosTabComponent} from './productos-tab.component'
import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';
import { GooglemapsModule } from '../../../googlemaps/googlemaps/googlemaps.module';


@NgModule({
  declarations: [
  ProductosTabComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    GooglemapsModule,
  ],
  exports:[
    ProductosTabComponent
  ]
})
export class ProductosTabModule { }