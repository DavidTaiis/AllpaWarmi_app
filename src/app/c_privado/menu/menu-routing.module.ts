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
        loadChildren: () => import('./../../c_privado/tab_inicio/inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'perfil-ma/:id',
        loadChildren: () => import('./../../c_privado/tab_inicio/perfil-ma/perfil-ma.module').then( m => m.PerfilMAPageModule)
      },
      {
        path: 'novedades',
        loadChildren: () => import('./../../c_privado/tab_noticias/novedades/novedades.module').then( m => m.NovedadesPageModule)
      },
      {
        path: 'noticias',
        loadChildren: () => import('./../../c_privado/tab_noticias/noticia/noticia.module').then( m => m.NoticiaPageModule)
      },
      {
        path: 'ordenes',
        loadChildren: () => import('./../../c_privado/tab_ordenes/entregas/entregas.module').then( m => m.EntregasPageModule)
      },
      {
        path: 'detalles-entrega',
        loadChildren: () => import('./../../c_privado/tab_ordenes/detalles-entrega/detalles-entrega.module').then( m => m.DetallesEntregaPageModule)
      },
      {
        path: 'planificacion',
        loadChildren: () => import('./../../c_privado/tab_planificacion/planificacion/planificacion.module').then( m => m.PlanificacionPageModule)
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
