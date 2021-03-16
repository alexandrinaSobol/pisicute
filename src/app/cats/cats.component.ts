import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})

export class CatsComponent implements OnInit {
  isVisible = false;
  isConfirmLoading = false;

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

  listOfData: CatItem[] = [
    {
      name: 'Bella',
      breed: 'Abyssinian',
      age: 1,
      addDate: '1970-01-09 18:45:09',
      updateDate: '1970-01-09 18:45:10'
    },
    {
      name: 'Charlie',
      breed: 'Birman',
      age: 2,
      addDate: '2010-01-09 18:45:09',
      updateDate: '2010-04-09 18:45:10'
    }
  ];
  constructor() { }

  addCats(): void {
    this.isVisible = true;
  }

  editCat(cat: any): void {
    console.log(cat);
  }

  ngOnInit(): void {
  }

}

interface CatItem {
  name: string;
  breed: string;
  age: number;
  addDate: string;
  updateDate: string
}

