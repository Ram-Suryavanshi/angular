import { favouriteArguments } from './favourite/favourite.component';
import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./app.component.css']
})
export class HomeComponent {
  title = 'Angular 4+ Application';
  courses = [];  

  summary = "have the @Pipe decorator with pipe metadata that has a name property. This value will be used to call this pipe in template expressions. It must be a valid JavaScript identifier."
  
  constructor(service: AppService){
       this.courses = service.getCourses("Shaym");
  }

  post = {
    title:"rating",
    isFavourite:true
  }
 
  onFavouriteChange(favouriteArgs : favouriteArguments){
    console.log("Favourite has changed:", favouriteArgs.isFavourite)
  }
}
