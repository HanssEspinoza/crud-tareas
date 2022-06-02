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

  //obtener la lista tareas
  @Input() tareas: Tarea[] = [];

  constructor(
    //constructor dialogpara el modal y router y location para recargar la página
    public dialog: MatDialog,
    public _router: Router, 
    public _location: Location
  ) { }
  

  ngOnInit(): void {
    //obtener data del localStorage
    this.tareas = JSON.parse(localStorage.getItem('tareas') || '[]');
  }

  borrarTarea(index: number) {
    //Funcion para pasat a true el campo Descartadas
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
    //Funcion para pasat a true el campo Completadas
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
    //Funcion para abri el modal en caso de modificar enviar los datos en la variable data
    const dialogActionDetail = this.dialog.open(AccionCrearDialogComponent, {
      width: '60%',
      data: {
      },
    });
    //recargar la pagina luego de enviar
    dialogActionDetail.afterClosed().subscribe(result => {
      if (result) {
        this.ngOnInit();
      }
    });

  }

  refresh(): void {
    //funcion para recargar
		this._router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
		console.log(decodeURI(this._location.path()));
		this._router.navigate([decodeURI(this._location.path())]);
		});
	}

}
