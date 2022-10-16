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
        loadChildren: () => import('./../../ma_vendedora/tab-inicio/tab-inicio.module').then( m => m.TabInicioPageModule)
      },
      {
        path: 'transporte',
       
        children:[
          {
            path: '',
            loadChildren: () => import('./../../ma_vendedora/tab_transporte/transporte/transporte.module').then( m => m.TransportePageModule),
          },
          {
            path: 'detalles-linea',
            loadChildren: () => import('./../../ma_vendedora/tab_transporte/detalles-linea/detalles-linea.module').then( m => m.DetallesLineaPageModule)
          },
          {
            path: 'camionetas',
            loadChildren: () => import('./../../ma_vendedora/tab_transporte/camionetas/camionetas.module').then( m => m.CamionetasPageModule)
          },
          {
            path: 'perfil-conductor/:id',
            loadChildren: () => import('./../../ma_vendedora/tab_transporte/perfil-conductor/perfil-conductor.module').then(m=>m.PerfilConductorPageModule)
          }
        ]
      },
      {
        path: 'productos',
        children:[
          {
            path: '',
            loadChildren: () => import('./../../ma_vendedora/tab_productos/productos/productos.module').then( m => m.ProductosPageModule)

          }
        ]
      },
      {
        path: '',
        children:[{
          path: 'ventas',
          loadChildren: () => import('./../../ma_vendedora/tab_ventas/inicio/inicio.module').then( m => m.InicioPageModule)
        }]
        
      },

      {
        path: '',
        children: [
          {
            path: 'notificaciones',
            loadChildren: () => import('./../../ma_vendedora/tab_notificaciones/inicio/inicio.module').then( m => m.InicioPageModule)
          }
        ]
      },
    
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}