import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('./../../c_bus/tab-inicio/tab-inicio.module').then( m => m.TabInicioPageModule)
      },
      {
        path: 'novedades',
        loadChildren: () => import('./../../c_bus/novedades/novedades.module').then( m => m.NovedadesPageModule)
      },
      {
        path: 'paradas',
        loadChildren: () => import('./../../c_bus/paradas/paradas.module').then( m => m.ParadasPageModule)
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
