import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletadasPageComponent } from './pages/completadas-page/completadas-page.component';

const routes: Routes = [
  {
    path: '',
    component: CompletadasPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompletadasRoutingModule { }
