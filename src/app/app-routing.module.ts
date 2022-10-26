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
    path: 'ma_vendedora/geolocalizacion-venta',
    loadChildren: () => import('./ma_vendedora/geolocalizacion-venta/geolocalizacion-venta.module').then( m => m.GeolocalizacionVentaPageModule)
  },
  {
    path: 'ma_vendedora/menu',
    loadChildren: () => import('./ma_vendedora/menu/menu.module').then( m => m.MenuPageModule)
  },

  {
    path: 'modal-huerto-venta',
    loadChildren: () => import('./consumidor/tab_agricultoras/modal-huerto-venta/modal-huerto-venta.module').then( m => m.ModalHuertoVentaPageModule)
  },
  {
    path: 'consumidor/geolocalizacion-domicilio',
    loadChildren: () => import('./consumidor/geolocalizacion-domicilio/geolocalizacion-domicilio.module').then( m => m.GeolocalizacionDomicilioPageModule)
  },
  {
    path: 'modal-camioneta',
    loadChildren: () => import('./ma_vendedora/modals/modal-camioneta/modal-camioneta.module').then( m => m.ModalCamionetaPageModule)
  },
  {
    path: 'modal-noticias',
    loadChildren: () => import('./ma_vendedora/modals/modal-noticias/modal-noticias.module').then( m => m.ModalNoticiasPageModule)
  },
  {
    path: 'modal-notificaciones',
    loadChildren: () => import('./ma_vendedora/modals/modal-notificaciones/modal-notificaciones.module').then( m => m.ModalNotificacionesPageModule)
  },
  {
    path: 'detalles-venta',
    loadChildren: () => import('./ma_vendedora/tab_notificaciones/detalles-venta/detalles-venta.module').then( m => m.DetallesVentaPageModule)
  },
  {
    path: 'update-profile',
    loadChildren: () => import('./login/update-profile/update-profile.module').then( m => m.UpdateProfilePageModule)
  },  {
    path: 'acopio-modal',
    loadChildren: () => import('./ma_acopiadora/modals/acopio-modal/acopio-modal.module').then( m => m.AcopioModalPageModule)
  },
  {
    path: 'parada',
    loadChildren: () => import('./c_bus/modals/parada/parada.module').then( m => m.ParadaPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
