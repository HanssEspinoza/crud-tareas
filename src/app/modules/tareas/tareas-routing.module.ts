import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`@modules/todas/todas.module`).then(m => m.TodasModule)
  },
  {
    path: 'completadas',
    loadChildren: () => import(`@modules/completadas/completadas.module`).then(m => m.CompletadasModule)
  },
  {
    path: 'descartadas',
    loadChildren: () => import(`@modules/descartadas/descartadas.module`).then(m => m.DescartadasModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasRoutingModule { }
