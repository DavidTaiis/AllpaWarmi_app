import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNoticiasPage } from './modal-noticias.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNoticiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNoticiasPageRoutingModule {}
