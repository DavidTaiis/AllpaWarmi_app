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
        loadChildren: () => import('./../../ma_acopiadora/tab-inicio/tab-inicio.module').then( m => m.TabInicioPageModule)
      },
      {
        path: 'detalles-acopio',
        loadChildren: () => import('./../../ma_acopiadora/detalles-acopio/detalles-acopio.module').then( m => m.DetallesAcopioPageModule)
      },
      {
        path: 'centroAcopio',
        loadChildren: () => import('./../../ma_acopiadora/tab-crear-acopio/tab-crear-acopio.module').then( m => m.TabCrearAcopioPageModule)
      },
      {
        path: 'agricultoras',
        loadChildren: () => import('./../../ma_acopiadora/tab-agricultoras/tab-agricultoras.module').then( m => m.TabAgricultorasPageModule)
      },
      {
        path: 'perfil-ma/:id',
        loadChildren: () => import('./../../ma_acopiadora/tab-agricultoras/perfil-ma/perfil-ma.module').then( m => m.PerfilMaPageModule)
      },
    
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
