import { Component, OnInit, inject } from '@angular/core'; 
import { MoviesService } from '../../services/movies.service';
import { AppCardMoviesComponent } from './app-card-movies/app-card-movies.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [AppCardMoviesComponent,
    
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {

  movies: any[] = [];

  private moviesService: MoviesService = inject(MoviesService);

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.moviesService.getMovies().subscribe(
      (data) => {
        this.movies = data; 
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }

}
