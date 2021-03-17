import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddFormService {

  constructor() {}

  addName(name:string){
    if(name == undefined)
    return false;
    else
    return true;
  }
   
  addBreed(breed:Object){
    if(breed == undefined)
    return false;
    else
    return true;
  }
  addAge(age:string){
    if(age == undefined)
    return false;
    else
    return true;
  }
}
