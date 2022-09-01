import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAcopioPage } from './modal-acopio.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAcopioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAcopioPageRoutingModule {}
