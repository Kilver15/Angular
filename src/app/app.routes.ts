import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';
export const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
      },
    {
        path: 'register',
        loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
      },
      {
        path: 'verificacion',
        loadChildren: () => import('./verificacion/verificacion.module').then(m => m.VerificacionModule),
      },
      {
        path: 'cines/create',
        loadChildren: () => import('./cines/cines-store/cines-store.module').then(m => m.CinesStoreModule),
      },
      {
        path: 'cines/index',
        loadChildren: () => import('./cines/cines-index/cines-index.module').then(m => m.CinesIndexModule),
      },
      {
        path: 'cines/edit/:id',
        loadChildren: () => import('./cines/cines-edit/cines-edit.module').then(m => m.CinesEditModule),
      },
      {
        path: 'salas/create',
        loadChildren: () => import('./salas/salas-store/salas-store.module').then(m => m.SalasStoreModule),
      },
      {
        path: 'salas/index',
        loadChildren: () => import('./salas/salas-index/salas-index.module').then(m => m.SalasIndexModule),
      },
      {
        path: 'salas/edit/:id',
        loadChildren: () => import('./salas/salas-edit/salas-edit.module').then(m => m.SalasEditModule),
      },
      {
        path: 'combos/create',
        loadChildren: () => import('./combos/combos-store/combos-store.module').then(m => m.CombosStoreModule),
      },
      {
        path: 'combos/index',
        loadChildren: () => import('./combos/combos-index/combos-index.module').then(m => m.CombosIndexModule),
      },
      {
        path: 'combos/edit/:id',
        loadChildren: () => import('./combos/combos-edit/combos-edit.module').then(m => m.CombosEditModule),
      },
      {
        path: 'generos/create',
        loadChildren: () => import('./generos/generos-store/generos-store.module').then(m => m.GenerosStoreModule),
      },
      {
        path: 'generos/index',
        loadChildren: () => import('./generos/generos-index/generos-index.module').then(m => m.GenerosIndexModule),
      },
      {
        path: 'generos/edit/:id',
        loadChildren: () => import('./generos/generos-edit/generos-edit.module').then(m => m.GenerosEditModule),
      },
      {
        path: 'productos/create',
        loadChildren: () => import('./productos/productos-store/productos-store.module').then(m => m.ProductosStoreModule),
      },
      {
        path: 'productos/index',
        loadChildren: () => import('./productos/productos-index/productos-index.module').then(m => m.ProductosIndexModule),
      },
      {
        path: 'productos/edit/:id',
        loadChildren: () => import('./productos/productos-edit/productos-edit.module').then(m => m.ProductosEditModule),
      },
      {
        path: 'funciones/create',
        loadChildren: () => import('./funciones/funciones-store/funciones-store.module').then(m => m.FuncionesStoreModule),
      },
      {
        path: 'funciones/index',
        loadChildren: () => import('./funciones/funciones-index/funciones-index.module').then(m => m.FuncionesIndexModule),
      },
      {
        path: 'funciones/edit/:id',
        loadChildren: () => import('./funciones/funciones-edit/funciones-edit.module').then(m => m.FuncionesEditModule),
      },
      {
        path: 'peliculas/create',
        loadChildren: () => import('./peliculas/peliculas-store/peliculas-store.module').then(m => m.PeliculasStoreModule),
      },
      {
        path: 'peliculas/index',
        loadChildren: () => import('./peliculas/peliculas-index/peliculas-index.module').then(m => m.PeliculasIndexModule),
      },
      {
        path: 'peliculas/edit/:id',
        loadChildren: () => import('./peliculas/peliculas-edit/peliculas-edit.module').then(m => m.PeliculasEditModule),
      },
      {
        path: 'boletos/create',
        loadChildren: () => import('./peliculas/peliculas-store/peliculas-store.module').then(m => m.PeliculasStoreModule),
      },
      {
        path: 'boletos/index',
        loadChildren: () => import('./peliculas/peliculas-index/peliculas-index.module').then(m => m.PeliculasIndexModule),
      },
      {
        path: 'boletos/edit/:id',
        loadChildren: () => import('./peliculas/peliculas-edit/peliculas-edit.module').then(m => m.PeliculasEditModule),
      },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
