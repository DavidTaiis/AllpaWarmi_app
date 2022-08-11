import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./login/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./login/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'consumidor/inicio',
    loadChildren: () => import('./consumidor/tab_inicio/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'consumidor/tab-inicial',
    loadChildren: () => import('./consumidor/tab-inicial/tab-inicial.module').then( m => m.TabInicialPageModule)
  },
  {
    path: 'ma_lideresa/geolocalizacion',
    loadChildren: () => import('./ma_lideresa/geolocalizacion/geolocalizacion.module').then( m => m.GeolocalizacionPageModule)
  },
  {
    path: 'ma_lideresa/menu',
    loadChildren: () => import('./ma_lideresa/menu/menu.module').then( m => m.MenuPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
