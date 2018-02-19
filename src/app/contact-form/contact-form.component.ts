import { ContactFormValidator } from './contact-form-validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  // FromBuilder
  constructor(fb : FormBuilder) {
    // this.form = fb.group({
    //   name:[],
    //   contct: fb.group({
    //     email:[],
    //     phone:[]
    //   }),
    //   topic:fb.array([]) 
    // })  
  }

  //Template form data declaration

  log(fname){
    console.log("Welcome",fname)
  }

  submitMethod(refFrom){
    console.log("Form Object",refFrom)
  }

  contactList = [
    { id : 1, name: 'Ram'},
    { id : 2, name: 'Krish'},
    { id : 3, name: 'Ravi Suryavanshi'}
  ]

  gender = [
    {id:1, gen: 'Male'},
    {id:2, gen: 'Female'}
  ]

  // Reactive form data declaration

  form = new FormGroup({
    userName: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      ContactFormValidator.checkSpecialSymbol
    ]),
    password: new FormControl('',Validators.required)
  });

  get userName(){
    return this.form.get('userName');
  }
 
  ngOnInit() {
  }

}
