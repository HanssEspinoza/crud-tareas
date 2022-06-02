import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '@core/models/Tarea';

@Component({
  selector: 'app-descartadas-page',
  templateUrl: './descartadas-page.component.html',
  styleUrls: ['./descartadas-page.component.css']
})
export class DescartadasPageComponent implements OnInit {

  @Input() tareas: Tarea[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tareas = JSON.parse(localStorage.getItem('tareas') || '[]');
    console.log(this.tareas);
  }

}
