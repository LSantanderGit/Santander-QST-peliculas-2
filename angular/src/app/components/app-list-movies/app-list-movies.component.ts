import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core'; 
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-app-list-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-list-movies.component.html',
  styleUrl: './app-list-movies.component.scss'
})

export class AppListMoviesComponent implements OnInit {
  movies: any[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(
      (data) => {
        console.log('Received Movies:', data);
        this.movies = data;
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }

  genreButtonClick(genre: string): void {
    console.log(`Button clicked for genre: ${genre}`);
  }
}
