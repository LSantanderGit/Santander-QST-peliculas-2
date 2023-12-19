import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class MoviesService {
  private grailsUrl = 'http://localhost:8080/movies/';
  

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.grailsUrl}getMovies`).pipe(
      catchError((error) => {
        console.error('Error fetching movies:', error);
        throw error; // rethrow the error for further handling
      })
    );
  }
}
