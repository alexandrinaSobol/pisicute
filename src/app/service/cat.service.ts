import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Cats } from '../list/cats';
import { MessageService } from './message.service';
import { threadId } from 'node:worker_threads';


@Injectable({
  providedIn: 'root'
})
export class CatService {

  public catUrl = 'http://localhost:8080';

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  constructor(private http: HttpClient) { }

  getCat() {
    return this.http.get('${this.uri}/cats');
  }

  getCatById(id: any) {

    return this.http.get('${this.uri}/{$id}');
  }



  addCat( name: String, breed: String, age: number, addDate: String, updateDate:String){
    const cat = {
      name: name,
      breed: breed,
      age: age,
      addDate: addDate,
      updateDate: updateDate
    };
  return this.http.post('${this.url}/cats/add', cat);
  }

  updateCat(id: number, name: String, breed: String, age: number, addDate: String, updateDate:String){
    const cat = {
      id: id,
      name: name,
      breed: breed,
      age: age,
      addDate: addDate,
      updateDate: updateDate
    };
  return this.http.post('${this.url}/cats/add', cat);
  }

  // searchHeroes(term: string): Observable<Cats[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<Cats[]>(`${this.heroesUrl}/?name=${term}`).pipe(
  //     tap(x => x.length ?
  //        this.log(`found heroes matching "${term}"`) :
  //        this.log(`no heroes matching "${term}"`)),
  //     catchError(this.handleError<Cats[]>('searchHeroes', []))
  //   );
  // }



  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }


  // private log(message: string) {
  //   this.messageService.add(`HeroService: ${message}`);
  // }

}
