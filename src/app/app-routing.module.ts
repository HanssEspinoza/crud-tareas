import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasPageComponent } from '@modules/tareas/pages/tareas-page/tareas-page.component';

const routes: Routes = [
  //Ruta principal que sera tareas lo equivalente a un Home
  {
    path:'',
    component: TareasPageComponent,
    loadChildren:() => import('./modules/tareas/tareas.module').then(m => m.TareasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
