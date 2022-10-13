import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCamionetaPage } from './modal-camioneta.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCamionetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCamionetaPageRoutingModule {}
