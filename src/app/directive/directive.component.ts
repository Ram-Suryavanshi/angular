import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor() { }

  list = [1,2,3];

  viewMode = "map";

  ngOnInit() {
  }

}
