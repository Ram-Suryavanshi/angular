import { AbstractControl} from '@angular/forms';

export class ContactFormValidator{
   static checkSpecialSymbol( control : AbstractControl){
        if(!(control.value as string).match("^[a-z0-9._%+-]+@[a-z0-9.+-]+\.[a-z]{2,4}$")){
            return {
                checkSpecialSymbol : true
            }       
        } else null;
    }
}