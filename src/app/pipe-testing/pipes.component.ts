import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  e: number = Math.E;
  str: string = 'Hello World!'
  date: Date = new Date;

  constructor() { }

  ngOnInit(): void {
  }



}
