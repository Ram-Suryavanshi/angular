import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input('isFavourite') isFavourite:boolean;
  @Output('change') change = new EventEmitter();
  constructor() {
    this.isFavourite = true; 
  }
  
  ngOnInit() {
  }

  onClick(){
    this.isFavourite = !this.isFavourite;
    this.change.emit({"isFavourite":this.isFavourite});
  }

}

export interface favouriteArguments{
  isFavourite: boolean
}
