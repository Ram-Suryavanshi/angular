import { favouriteArguments } from './favourite/favourite.component';
import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is angular Application';
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
