import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNotificacionesPage } from './modal-notificaciones.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNotificacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNotificacionesPageRoutingModule {}
