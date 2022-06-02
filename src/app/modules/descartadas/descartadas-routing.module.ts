import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescartadasPageComponent } from './pages/descartadas-page/descartadas-page.component';

const routes: Routes = [
  {
    path: '',
    component: DescartadasPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DescartadasRoutingModule { }
