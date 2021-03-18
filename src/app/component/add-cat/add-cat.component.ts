import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { AddFormService } from '../../service/add-form.service'
import {breeds} from '../../list/breeds';
import {Cats} from '../../list/cats'
import { HttpClient } from '@angular/common/http';
import { CatService } from '../../service/cat.service'


@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.scss']
})
export class AddCatComponent implements OnInit {

  
  name: string = '';
  breeds=breeds;
  age: string ='';

  cats: Cats[] = [];
  


  constructor(private addForm: AddFormService, private modal: NzModalRef, private service: CatService, private http: HttpClient) { }


  ngOnInit(): void {
    

  }

  
    addCatClick(cat: Cats){
      this.service.addCat(this.).subscribe(p: Cats) => {this.}
   }


   getPostPerson(){
    this.service.PostPersonData(this.firstpers).subscribe((p: Cats) => {this.cats = p;} );
 }
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
