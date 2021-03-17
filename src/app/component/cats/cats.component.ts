import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { AddCatComponent } from '../add-cat/add-cat.component';
import { WiewCatsComponent } from '../wiew-cats/wiew-cats.component'
import { Cats } from '../../list/cats'
import { CATS } from '../../list/make-cats';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})

export class CatsComponent implements OnInit {
  cats: Cats[] = [];
  listOfColumn = [
    {
      title: 'Get Name',
      compare: (a: CatItem, b: CatItem) => a.name.localeCompare(b.name),
      priority: 1
    },
    {
      title: 'Breed',
      compare: (a: CatItem, b: CatItem) => a.breed.localeCompare(b.breed),
      priority: 2
    },
    {
      title: 'Age',
      compare: (a: CatItem, b: CatItem) => a.age - b.age,
      priority: 3
    },
    {
      title: 'Add Date',
      compare: (a: CatItem, b: CatItem) => a.addDate.localeCompare(b.addDate),
      priority: 4
    },
    {
      title: 'Update Date',
      compare: (a: CatItem, b: CatItem) => a.updateDate.localeCompare(b.updateDate),
      priority: 5
    },
    {
      title: 'Action',
      compare: null,
      priority: false
    }

  ];
  constructor(private modalService: NzModalService) { }

  addCatsModal(): void {
    this.modalService.create({
      nzTitle: 'Modal Title',
      nzContent: AddCatComponent
    });
  }
  viewCatsModal(): void {
    this.modalService.create({
      nzTitle: 'Modal Title',
      nzContent: WiewCatsComponent
    });
  }

  // viewCat(cat: any): void {
  //   console.log(cat);
  // }

  ngOnInit(): void {
    this.getCats();

  }
  getCats(): void{
    this.cats=CATS;

  }


  // console(value: number) {
  //   const catss = cats.find(catss => catss.id === value);
  //   console.log("ati adaugat produsul in cos " + catss?.name );
  // }
}
interface CatItem {
  name: string;
  breed: string;
  age: number;
  addDate: string;
  updateDate: string
}

