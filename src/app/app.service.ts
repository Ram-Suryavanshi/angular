import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }

  getCourses(str){
      return ["Angular","Js","Java","C#", str];
  }

}
