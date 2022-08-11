import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabInicioPageRoutingModule } from './tab-inicio-routing.module';
import { TabInicioPage } from './tab-inicio.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabInicioPageRoutingModule
  ],
  declarations: [TabInicioPage]
})
export class TabInicioPageModule {}
