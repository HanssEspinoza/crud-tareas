import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  mainMenu: {
    defaultOptions: Array<any>
  } = { defaultOptions: [] };

  constructor() { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'TODAS',
        router: ['/']
      },
      {
        name: 'COMPLETADAS',
        router: ['/', 'completadas']
      },
      {
        name: 'DESCARTADAS',
        router: ['/', 'descartadas']
      }
    ]
  }

}
