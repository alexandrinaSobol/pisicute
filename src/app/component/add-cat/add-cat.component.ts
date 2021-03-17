import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { AddFormService } from '../../service/add-form.service'
import {breeds} from '../../list/breeds';


@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.scss']
})
export class AddCatComponent implements OnInit {

  
  name: string = '';
  breeds=breeds;
  age: string ='';


  constructor(private addForm: AddFormService, private modal: NzModalRef) { }


  ngOnInit(): void {
  }

  addCatClick(): any{
    const cat = {
      name: this.name,
      //breed: this.breed,
      age: this.age
    };

    // if (!this.addForm.addName(cat.name)) {
    //   console.log("Enter name");
    //   return false;
    // }
    // // else if (!this.addForm.addBreed(cat.breed)) {
    // //   console.log("Enter breed");
    // //   return false;
    // // }

    // else if (!this.addForm.addAge(cat.age)) {
    //   console.log("Enter age");
    //   return false;
    // }
  }
  destroyModal(): void {
    this.modal.destroy();
  }
 
}
