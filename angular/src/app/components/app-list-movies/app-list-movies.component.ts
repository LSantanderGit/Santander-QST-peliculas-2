import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core'; 
import { MoviesService } from '../../services/movies.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-app-list-movies',
  standalone: true,
  imports: [CommonModule,
    MatIconModule],
  templateUrl: './app-list-movies.component.html',
  styleUrl: './app-list-movies.component.scss'
})

export class AppListMoviesComponent implements OnInit {
  movies: any[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(
      (data) => {
        this.movies = data; 
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }

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
