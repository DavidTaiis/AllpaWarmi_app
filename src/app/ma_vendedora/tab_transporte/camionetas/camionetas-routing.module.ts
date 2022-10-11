import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamionetasPage } from './camionetas.page';

const routes: Routes = [
  {
    path: '',
    component: CamionetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamionetasPageRoutingModule {}
