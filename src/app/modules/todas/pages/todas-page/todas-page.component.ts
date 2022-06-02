import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '@core/models/Tarea';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AccionCrearDialogComponent } from './dialogs/accion-crear-dialog/accion-crear-dialog.component';


@Component({
  selector: 'app-todas-page',
  templateUrl: './todas-page.component.html',
  styleUrls: ['./todas-page.component.css']
})
export class TodasPageComponent implements OnInit {

  @Input() tareas: Tarea[] = [];

  constructor(
    public dialog: MatDialog,
    public _router: Router, 
    public _location: Location
  ) { }
  

  ngOnInit(): void {
    this.tareas = JSON.parse(localStorage.getItem('tareas') || '[]');
  }

  borrarTarea(index: number) {
    let tarea = this.tareas[index];
    if (!tarea.descartada) {
      tarea.descartada = !tarea.descartada;
      this.tareas.splice(index, 1);
      this.tareas.unshift(tarea);
    } else {
      tarea.descartada = !tarea.descartada;
      this.tareas.splice(index, 1);
      this.tareas.push(tarea);
    }
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
    console.log(this.tareas);
  }

  completarTarea(index: number) {
    let tarea = this.tareas[index];
    if (!tarea.completada) {
      tarea.completada = !tarea.completada;
      this.tareas.splice(index, 1);
      this.tareas.unshift(tarea);
    } else {
      tarea.completada = !tarea.completada;
      this.tareas.splice(index, 1);
      this.tareas.push(tarea);
    }
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
    console.log(this.tareas);
  }

  openDialog() {
    const dialogActionDetail = this.dialog.open(AccionCrearDialogComponent, {
      width: '60%',
      data: {
      },
    });
    dialogActionDetail.afterClosed().subscribe(result => {
      if (result) {
        this.ngOnInit();
      }
    });

  }

  refresh(): void {
		this._router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
		console.log(decodeURI(this._location.path()));
		this._router.navigate([decodeURI(this._location.path())]);
		});
	}

}
