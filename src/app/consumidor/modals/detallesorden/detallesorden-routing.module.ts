import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesordenPage } from './detallesorden.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesordenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesordenPageRoutingModule {}
