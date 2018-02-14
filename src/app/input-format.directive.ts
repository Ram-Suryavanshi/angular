import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') input;
  constructor(private elef: ElementRef) { }
  
  @HostListener('blur') onBlur(){
    
    if(this.input =='lowercase'){
      let value:string = this.elef.nativeElement.value;
      this.elef.nativeElement.value = value.toLowerCase();
    }

    if(this.input =='uppercase'){
      let value:string = this.elef.nativeElement.value;
      this.elef.nativeElement.value = value.toUpperCase();
    }
  }
  
  @HostListener('focus') onFocus(){
    console.log("This is on Focus")
  }

}
