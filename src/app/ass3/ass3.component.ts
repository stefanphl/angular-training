import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass3',
  templateUrl: './ass3.component.html',
  styleUrls: ['./ass3.component.css']

})
export class Ass3Component implements OnInit {

  paragraphVisible;
  clicks;

  constructor() {
    this.paragraphVisible = false;
    this.clicks = [];
  }

  ngOnInit() {
  }

  toggleParagraph() {
    this.paragraphVisible = !this.paragraphVisible;
  }

  recordClicks() {
    this.clicks.push(new Date());
  }

  getParagraphVisibility() {
    return this.paragraphVisible ? 'block' : 'none';
  }

  getListElementColor() {
    return this.clicks.length > 4 ? 'blue' : '';
  }



}
