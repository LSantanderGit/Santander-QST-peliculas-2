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

  ngOnInit() {
    this.moviesService.getMovies().subscribe((data) => {
      this.movies = data;
    });
  }
}
