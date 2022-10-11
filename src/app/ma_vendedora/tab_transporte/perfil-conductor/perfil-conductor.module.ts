import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilConductorPageRoutingModule } from './perfil-conductor-routing.module';

import { PerfilConductorPage } from './perfil-conductor.page';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxStarRatingModule } from 'ngx-star-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NgxStarRatingModule,
    PerfilConductorPageRoutingModule
  ],
  declarations: [PerfilConductorPage]
})
export class PerfilConductorPageModule {}
