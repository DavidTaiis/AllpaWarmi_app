import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesAcopioPage } from './detalles-acopio.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesAcopioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesAcopioPageRoutingModule {}
