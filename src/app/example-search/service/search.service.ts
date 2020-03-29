import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getResultsByKeyWord(key): Observable<any> {
    const ghUsers = `http://api.github.com/search/users?q=${key}`;
    return this.http.get(ghUsers).pipe(
      map(res => {
        return res;
      })
    );
  }
}
