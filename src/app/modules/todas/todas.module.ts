import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodasRoutingModule } from './todas-routing.module';
import { TodasPageComponent } from './pages/todas-page/todas-page.component';
import { AccionCrearDialogComponent } from './pages/todas-page/dialogs/accion-crear-dialog/accion-crear-dialog.component';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodasPageComponent,
    AccionCrearDialogComponent
  ],
  imports: [
    CommonModule,
    TodasRoutingModule,
    MatDialogModule,
    MatInputModule,
    FormsModule
  ]
})
export class TodasModule { }
