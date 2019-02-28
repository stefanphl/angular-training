import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass2',
  templateUrl: './ass2.component.html',
  styleUrls: ['./ass2.component.css']
})
export class Ass2Component implements OnInit {

  username;

  constructor() {
    this.username = '';

  }

  ngOnInit() {
    this.username = '';
  }

  resetUsername() {
    this.username = '';
  }





}
