import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tarea } from '@core/models/Tarea';

@Component({
  selector: 'app-accion-crear-dialog',
  templateUrl: './accion-crear-dialog.component.html',
  styleUrls: ['./accion-crear-dialog.component.css']
})
export class AccionCrearDialogComponent implements OnInit {

  @Input() tareas:Tarea[] = [];

  constructor(public dialogRef: MatDialogRef<AccionCrearDialogComponent>) { }

  titulo = "";
  descripcion = "";

  ngOnInit(): void {
    this.tareas = JSON.parse(localStorage.getItem('tareas') || '[]');
  }

  crearTarea(): void{

    let tarea:Tarea = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      completada: false,
      descartada: false
    };

    this.tareas.push(tarea);
    this.dialogRef.close(true);
    this.titulo = "";
    this.descripcion = "";
    console.log(this.tareas);
    localStorage.setItem('tareas', JSON.stringify(this.tareas));

  }

}
