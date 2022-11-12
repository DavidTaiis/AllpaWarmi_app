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
        loadChildren: () => import('./../../c_camioneta/tab-inicio/tab-inicio.module').then( m => m.TabInicioPageModule)
      },
      {
        path: 'novedades',
        loadChildren: () => import('./../../c_camioneta/novedades/novedades.module').then( m => m.NovedadesPageModule)
      },
      {
        path: 'notificaciones',
        loadChildren: () => import('./../../c_camioneta/tab-notificaciones/tab-notificaciones.module').then( m => m.TabNotificacionesPageModule)
      },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
