import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then( m => m.RegistroPage)
  },
  {
    path: 'informe',
    loadComponent: () => import('./informe/informe.page').then( m => m.InformePage)
  },
  {
    path: 'recuperar-cuenta',
    loadComponent: () => import('./recuperar-cuenta/recuperar-cuenta.page').then( m => m.RecuperarCuentaPage)
  },
  {
    path: 'informe-tiempo',
    loadComponent: () => import('./informe-tiempo/informe-tiempo.page').then( m => m.InformeTiempoPage)
  },
  {
    path: 'informe-destino',
    loadComponent: () => import('./informe-destino/informe-destino.page').then( m => m.InformeDestinoPage)
  },
  {
    path: 'informe-origen',
    loadComponent: () => import('./informe-origen/informe-origen.page').then( m => m.InformeOrigenPage)
  },
  {
    path: 'insertar-flujo-pas',
    loadComponent: () => import('./insertar-flujo-pas/insertar-flujo-pas.page').then( m => m.InsertarFlujoPasPage)
  },
  {
    path: 'eliminar-flujo-pas',
    loadComponent: () => import('./eliminar-flujo-pas/eliminar-flujo-pas.page').then( m => m.EliminarFlujoPasPage)
  },
  {
    path: 'insertar-tiempo-tras',
    loadComponent: () => import('./insertar-tiempo-tras/insertar-tiempo-tras.page').then( m => m.InsertarTiempotras)
  },
  {
    path: 'insertar-est-origen',
    loadComponent: () => import('./insertar-est-origen/insertar-est-origen.page').then( m => m.InsertarEstorigen)
  },
  {
    path: 'insertar-est-destino',
    loadComponent: () => import('./insertar-est-destino/insertar-est-destino.page').then( m => m.InsertarEstdestino)
  },

  



];
