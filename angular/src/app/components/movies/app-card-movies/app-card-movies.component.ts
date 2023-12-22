import { Component } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-app-card-movies',
  standalone: true,
  imports: [],
  templateUrl: './app-card-movies.component.html',
  styleUrl: './app-card-movies.component.scss'
})
export class AppCardMoviesComponent {

  movies: any[] = [];

  constructor(private moviesService: MoviesService) {}

  genreButtonClick(genre: string): void {
    this.moviesService.getMoviesByGenre(genre).subscribe(
      (data) => {
        console.log(`(app-list-movies.component) Movies for genre ${genre}:`, data);
        this.movies = data;
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }
}
