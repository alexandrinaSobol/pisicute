import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CatsComponent} from './cats/cats.component'

@Injectable({ providedIn: 'root' })
export class CatsService {
  //randomUserUrl = 'https://api.randomuser.me/';

  getCats(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filters: Array<{ key: string; value: string[] }>
  ): Observable<{ results: CatItem[] }> {
    let params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('results', `${pageSize}`)
      .append('sortField', `${sortField}`)
      .append('sortOrder', `${sortOrder}`);
    filters.forEach(filter => {
      filter.value.forEach(value => {
        params = params.append(filter.key, value);
      });
    });
    return this.http.get<{ results: CatItem[] }>(`${this.randomUserUrl}`, { params });
  }

  constructor(private http: HttpClient) {}
}