import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '@core/models/Tarea';

@Component({
  selector: 'app-completadas-page',
  templateUrl: './completadas-page.component.html',
  styleUrls: ['./completadas-page.component.css']
})
export class CompletadasPageComponent implements OnInit {

  @Input() tareas: Tarea[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tareas = JSON.parse(localStorage.getItem('tareas') || '[]');
    console.log(this.tareas);
  }

}
