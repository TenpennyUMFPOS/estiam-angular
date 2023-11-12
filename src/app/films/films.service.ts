import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, shareReplay, tap } from 'rxjs';
import { film } from '../interfaces/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsServiceService {
  private apiHost = 'https://jsonplaceholder.typicode.com';
  private filmsCache$?: Observable<film[]>;

  constructor(private http: HttpClient) { }

  listFilms(): Observable<film[]> {
    if (!this.filmsCache$) {
      this.filmsCache$ = this.http.get<film[]>(`${this.apiHost}/posts`).pipe(
        shareReplay(1)
      );
    }
    return this.filmsCache$
  }

  createFilm(film: film): Observable<film> {
    return this.http.post<film>(`${this.apiHost}/posts`, film).pipe(
      tap(() => {
        this.filmsCache$ = of([]);
      })
    );
  }


  deleteFilm(id: any): Observable<void> {
    return this.http.delete<void>(`${this.apiHost}/posts/` + id);
  }
}
