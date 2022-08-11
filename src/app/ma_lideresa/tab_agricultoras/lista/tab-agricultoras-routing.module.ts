import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabAgricultorasPage } from './tab-agricultoras.page';

const routes: Routes = [
  {
    path: '',
    component: TabAgricultorasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabAgricultorasPageRoutingModule {}
