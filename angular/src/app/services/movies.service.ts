//movies.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { MoviesInterface } from '../interface/movies/movies.interface'; 


@Injectable({
  providedIn: 'root',
})

export class MoviesService {
  private grailsUrl = 'http://localhost:8080/movies';
  
  movies: MoviesInterface[] = [];

  constructor(private http: HttpClient) {}

  getMovies(): Observable<MoviesInterface[]> { 
    return this.http.get<MoviesInterface[]>(`${this.grailsUrl}/getMovies`)
      .pipe(
        tap((data) => console.log('Data received from service:', data)),
        catchError((error) => {
          console.error('Error fetching movies:', error);
          return throwError(error); 
        })
      );
  }
}
