import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilMAPage } from './perfil-ma.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilMAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilMAPageRoutingModule {}
