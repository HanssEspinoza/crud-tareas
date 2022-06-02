import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodasPageComponent } from './pages/todas-page/todas-page.component';

const routes: Routes = [
  {
    path: '',
    component: TodasPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodasRoutingModule { }
