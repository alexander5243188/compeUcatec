import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'datos',
    loadChildren: () => import('./pages/datos/datos.module').then( m => m.DatosPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'compra',
    loadChildren: () => import('./pages/compra/compra.module').then( m => m.CompraPageModule)
  },  {
    path: 'pastas',
    loadChildren: () => import('./pages/pastas/pastas.module').then( m => m.PastasPageModule)
  },
  {
    path: 'bebidas',
    loadChildren: () => import('./pages/bebidas/bebidas.module').then( m => m.BebidasPageModule)
  },
  {
    path: 'frutas',
    loadChildren: () => import('./pages/frutas/frutas.module').then( m => m.FrutasPageModule)
  },
  {
    path: 'verduras',
    loadChildren: () => import('./pages/verduras/verduras.module').then( m => m.VerdurasPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./pages/categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'lista-api',
    loadChildren: () => import('./pages/lista-api/lista-api.module').then( m => m.ListaAPIPageModule)
  }


 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
