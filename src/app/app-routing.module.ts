

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: 'sedes', 
    loadChildren: () => import('./views/sedes/sedes.module').then(m => m.SedesModule)
  },
  { 
    path: 'detalle-sede/:id', 
    loadChildren: () => import('./views/detalle-sede/detalle-sede.module').then(m => m.DetalleSedeModule)
  },
  { 
    path: 'nueva-sede', 
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  { 
    path: 'editar-sede/:id', 
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }