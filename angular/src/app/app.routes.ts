import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';

export const routes: Routes = [
    { path: 'movies', component: MoviesComponent },
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
];
