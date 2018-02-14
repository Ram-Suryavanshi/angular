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

  contact;

  loadContact(){
    this.contact = [
      { id : 1, name: 'Ram'},
      { id : 2, name: 'Krish'},
      { id : 3, name: 'Ravi'}
    ]
  }

  addContact(){
   this.contact.push({ id : 4, name: 'Amol'});
   this.contact.push({ id : 5, name: 'Sagar'})
  }

  trackContact(contact, index){
    return contact? contact.id : undefined
  }

  deleteContac(item){
    let index = this.contact.indexOf(item);
    this.contact.splice(index,1);
  }
  updateContac(item){
    item.name = "Sagar";
  }

  ngOnInit() {
  }

}
