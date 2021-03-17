import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Cats} from '../list/cats';
import {MessageService} from './message.service';


@Injectable({
  providedIn: 'root'
})
export class CatService {

  private heroesUrl = 'api/cats';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
    private messageService: MessageService) { }



    searchHeroes(term: string): Observable<Cats[]> {
      if (!term.trim()) {
        // if not search term, return empty hero array.
        return of([]);
      }
      return this.http.get<Cats[]>(`${this.heroesUrl}/?name=${term}`).pipe(
        tap(x => x.length ?
           this.log(`found heroes matching "${term}"`) :
           this.log(`no heroes matching "${term}"`)),
        catchError(this.handleError<Cats[]>('searchHeroes', []))
      );
    }



    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }


    private log(message: string) {
      this.messageService.add(`HeroService: ${message}`);
    }

}
