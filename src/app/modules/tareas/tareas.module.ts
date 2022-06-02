import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasPageComponent } from './pages/tareas-page/tareas-page.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TareasPageComponent
  ],
  imports: [
    CommonModule,
    TareasRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class TareasModule { }
