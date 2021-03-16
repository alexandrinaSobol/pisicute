import { Component, OnInit } from '@angular/core';
import {}

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})

export class CatsComponent implements OnInit {
  listOfColumn = [
    {
      title: 'Get Name',
      compare: null,
      priority: false
    },
    {
      title: 'Breed',
      compare: null,
      priority: false
    },
    {
      title: 'Age',
      compare: (a: CatItem, b: CatItem) => a.age - b.age,
      priority: 2
    },
    {
      title: 'Add Date',
      compare: null,
      priority: false
    },
    {
      title: 'Update Date',
      compare: null,
      priority: false
    }
  ];
  listOfData: CatItem[] = [
{
    name: 'Bella' ,
    breed: 'Abyssinian',
    age: 12,
    addDate: '1970-01-09 18:45:09',
    updateDate: '1970-01-09 18:45:10'
} 
  ];

  constructor() { }

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

