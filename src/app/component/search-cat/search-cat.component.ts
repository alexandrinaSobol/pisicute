import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {Cats} from '../../list/cats'
import {CatService} from '../../service/cat.service'

@Component({
  selector: 'app-search-cat',
  templateUrl: './search-cat.component.html',
  styleUrls: ['./search-cat.component.scss']
})
export class SearchCatComponent implements OnInit {
  // cats$!: Observable<Cats[]>;
  // private searchTerms = new Subject<string>();

  constructor() { 
  }
  
  // search(term: string): void {
  //   this.searchTerms.next(term);
  // }

  ngOnInit(): void {
    // this.cats$ = this.searchTerms.pipe(
    //   // wait 300ms after each keystroke before considering the term
    //   debounceTime(300),

    //   // ignore new term if same as previous term
    //   distinctUntilChanged(),

    //   // switch to new search observable each time the term changes
    //   switchMap((term: string) => this.heroService.searchHeroes(term)),
    // );

  }

}
