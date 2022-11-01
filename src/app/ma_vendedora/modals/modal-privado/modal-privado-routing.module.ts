import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPrivadoPage } from './modal-privado.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPrivadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPrivadoPageRoutingModule {}
