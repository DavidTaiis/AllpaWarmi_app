import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcopioModalPage } from './acopio-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AcopioModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcopioModalPageRoutingModule {}
