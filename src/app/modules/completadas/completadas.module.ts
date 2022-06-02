import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompletadasRoutingModule } from './completadas-routing.module';
import { CompletadasPageComponent } from './pages/completadas-page/completadas-page.component';


@NgModule({
  declarations: [
    CompletadasPageComponent
  ],
  imports: [
    CommonModule,
    CompletadasRoutingModule
  ]
})
export class CompletadasModule { }
