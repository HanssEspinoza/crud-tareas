import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescartadasRoutingModule } from './descartadas-routing.module';
import { DescartadasPageComponent } from './pages/descartadas-page/descartadas-page.component';


@NgModule({
  declarations: [
    DescartadasPageComponent
  ],
  imports: [
    CommonModule,
    DescartadasRoutingModule
  ]
})
export class DescartadasModule { }
