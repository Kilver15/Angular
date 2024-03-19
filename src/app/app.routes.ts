import { Routes } from '@angular/router';
import { LoginGuard } from './auth/login.guard';
import { VerificacionGuard } from './auth/verificacion.guard';

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
        canActivate: [VerificacionGuard]
      },
      {
        path: 'cines/create',
        loadChildren: () => import('./cines/cines-store/cines-store.module').then(m => m.CinesStoreModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'cines/index',
        loadChildren: () => import('./cines/cines-index/cines-index.module').then(m => m.CinesIndexModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'cines/edit/:id',
        loadChildren: () => import('./cines/cines-edit/cines-edit.module').then(m => m.CinesEditModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'salas/create',
        loadChildren: () => import('./salas/salas-store/salas-store.module').then(m => m.SalasStoreModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'salas/index',
        loadChildren: () => import('./salas/salas-index/salas-index.module').then(m => m.SalasIndexModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'salas/edit/:id',
        loadChildren: () => import('./salas/salas-edit/salas-edit.module').then(m => m.SalasEditModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'combos/create',
        loadChildren: () => import('./combos/combos-store/combos-store.module').then(m => m.CombosStoreModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'combos/index',
        loadChildren: () => import('./combos/combos-index/combos-index.module').then(m => m.CombosIndexModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'combos/edit/:id',
        loadChildren: () => import('./combos/combos-edit/combos-edit.module').then(m => m.CombosEditModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'generos/create',
        loadChildren: () => import('./generos/generos-store/generos-store.module').then(m => m.GenerosStoreModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'generos/index',
        loadChildren: () => import('./generos/generos-index/generos-index.module').then(m => m.GenerosIndexModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'generos/edit/:id',
        loadChildren: () => import('./generos/generos-edit/generos-edit.module').then(m => m.GenerosEditModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'productos/create',
        loadChildren: () => import('./productos/productos-store/productos-store.module').then(m => m.ProductosStoreModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'productos/index',
        loadChildren: () => import('./productos/productos-index/productos-index.module').then(m => m.ProductosIndexModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'productos/edit/:id',
        loadChildren: () => import('./productos/productos-edit/productos-edit.module').then(m => m.ProductosEditModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'funciones/create',
        loadChildren: () => import('./funciones/funciones-store/funciones-store.module').then(m => m.FuncionesStoreModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'funciones/index',
        loadChildren: () => import('./funciones/funciones-index/funciones-index.module').then(m => m.FuncionesIndexModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'funciones/edit/:id',
        loadChildren: () => import('./funciones/funciones-edit/funciones-edit.module').then(m => m.FuncionesEditModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'peliculas/create',
        loadChildren: () => import('./peliculas/peliculas-store/peliculas-store.module').then(m => m.PeliculasStoreModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'peliculas/index',
        loadChildren: () => import('./peliculas/peliculas-index/peliculas-index.module').then(m => m.PeliculasIndexModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'peliculas/edit/:id',
        loadChildren: () => import('./peliculas/peliculas-edit/peliculas-edit.module').then(m => m.PeliculasEditModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'boletos/create',
        loadChildren: () => import('./boletos/boletos-store/boletos-store.module').then(m => m.BoletosStoreModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'boletos/index',
        loadChildren: () => import('./boletos/boletos-index/boletos-index.module').then(m => m.BoletosIndexModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'boletos/edit/:id',
        loadChildren: () => import('./boletos/boletos-edit/boletos-edit.module').then(m => m.BoletosEditModule),
        canActivate: [LoginGuard]
      },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
