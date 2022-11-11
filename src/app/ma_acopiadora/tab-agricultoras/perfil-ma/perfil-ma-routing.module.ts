import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilMaPage } from './perfil-ma.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilMaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilMaPageRoutingModule {}
