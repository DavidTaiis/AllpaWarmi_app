import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'inicio',
        loadChildren: () => import('./../../ma_lideresa/tab-inicio/tab-inicio.module').then( m => m.TabInicioPageModule)
      },
      {
        path: 'agricultoras',
        loadChildren: () => import('../tab_agricultoras/lista/tab-agricultoras.module').then( m => m.TabAgricultorasPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../tab_agricultoras/perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'invitacion',
        loadChildren: () => import('../tab_invitaciones/lista/lista.module').then( m => m.ListaPageModule)
      },
      {
        path: 'editar-invitacion',
        loadChildren: () => import('../tab_invitaciones/edicion/edicion.module').then( m => m.EdicionPageModule)
      },
      {
        path: 'notificaciones',
        loadChildren: () => import('../tab_notificaciones/lista/lista.module').then( m => m.ListaPageModule)
      },
      {
        path: 'notificaciones-perfil-ma',
        loadChildren: () => import('../tab_notificaciones/perfil-ma/perfil-ma.module').then( m => m.PerfilMaPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
