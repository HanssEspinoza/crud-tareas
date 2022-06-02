import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasPageComponent } from '@modules/tareas/pages/tareas-page/tareas-page.component';

const routes: Routes = [
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
