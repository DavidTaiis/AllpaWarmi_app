import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabInicialPage } from './tab-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: TabInicialPage,
    children:[
      {
        path: 'inicio',
        loadChildren: () => import('../tab_inicio/inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'agricultoras',
        loadChildren: () => import('../tab_agricultoras/lista-agricultoras/lista-agricultoras.module').then( m => m.ListaAgricultorasPageModule)
      },
      {
        path: 'carrito',
        loadChildren: () => import('../tab_carrito/carrito/carrito.module').then( m => m.CarritoPageModule)
      },
      {
        path: 'ordenes',
        loadChildren: () => import('../tab_mis_ordenes/mis-ordenes/mis-ordenes.module').then( m => m.MisOrdenesPageModule)
      },
      {
        path: 'perfil-ma',
        loadChildren: () => import('./../../consumidor/tab_agricultoras/perfil-ma/perfil-ma.module').then( m => m.PerfilMaPageModule)
      },
      {
        path: 'productos',
        loadChildren: () => import('./../../consumidor/tab_agricultoras/productos/productos.module').then( m => m.ProductosPageModule)
      },
      {
        path: 'detalles_producto',
        loadChildren: () => import('./../../consumidor/tab_agricultoras/detalles-producto/detalles-producto.module').then( m => m.DetallesProductoPageModule)
      },
      {
        path: 'calificar-ma',
        loadChildren: () => import('./../../consumidor/tab_mis_ordenes/calificar-ma/calificar-ma.module').then( m => m.CalificarMaPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabInicialPageRoutingModule {}
