import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { ActivatedRoute } from "@angular/router";
import { CatsComponent } from '../cats/cats.component'
import {cats } from '../cats'

@Component({
  selector: 'app-wiew-cats',
  templateUrl: './wiew-cats.component.html',
  styleUrls: ['./wiew-cats.component.scss']
})
export class WiewCatsComponent implements OnInit {
  cat: any;

  name: string = '';
  breed: string = '';
  age: string = '';
  addDate: string = '';
  updateDate: string = '';

  constructor(private modal: NzModalRef, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const catIdFromRoute = Number(routeParams.get("catId"));

    // Find the product that correspond with the id provided in route.
    this.cat = cats.find(cats => cats.id === catIdFromRoute);
  }

  destroyModal(): void {
    this.modal.destroy();
  }



}
