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
  },

  {
    path: 'ma_acopiadora/geolocalizacion',
    loadChildren: () => import('./ma_acopiadora/geolocalizacion/geolocalizacion.module').then( m => m.GeolocalizacionPageModule)
  },
  {
    path: 'ma_acopiadora/menu',
    loadChildren: () => import('./ma_acopiadora/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'c_bus/menu',
    loadChildren: () => import('./c_bus/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'c_camioneta/geolocalizacion',
    loadChildren: () => import('./c_camioneta/geolocalizacion/geolocalizacion.module').then( m => m.GeolocalizacionPageModule)
  },
  {
    path: 'c_camioneta/menu',
    loadChildren: () => import('./c_camioneta/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'c_privado/geolocalizacion-salida',
    loadChildren: () => import('./c_privado/geolocalizacion-salida/geolocalizacion-salida.module').then( m => m.GeolocalizacionSalidaPageModule)
  },
  {
    path: 'c_privado/geolocalizacion-llegada',
    loadChildren: () => import('./c_privado/geolocalizacion-llegada/geolocalizacion-llegada.module').then( m => m.GeolocalizacionLlegadaPageModule)
  },
  {
    path: 'c_privado/menu',
    loadChildren: () => import('./c_privado/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'ma_vendedora/geolocalizacion-huerto',
    loadChildren: () => import('./ma_vendedora/geolocalizacion-huerto/geolocalizacion-huerto.module').then( m => m.GeolocalizacionHuertoPageModule)
  },
  {
    path: 'modal-acopio',
    loadChildren: () => import('./consumidor/tab_inicio/modal-acopio/modal-acopio.module').then( m => m.ModalAcopioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
