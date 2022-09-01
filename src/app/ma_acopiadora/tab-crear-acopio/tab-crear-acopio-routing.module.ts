import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabCrearAcopioPage } from './tab-crear-acopio.page';

const routes: Routes = [
  {
    path: '',
    component: TabCrearAcopioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabCrearAcopioPageRoutingModule {}
