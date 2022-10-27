import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilmaPage } from './perfilma.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilmaPageRoutingModule {}
