import { Routes } from '@angular/router';
import { AppListMoviesComponent } from './components/app-list-movies/app-list-movies.component';

export const routes: Routes = [
    { path: 'main', component: AppListMoviesComponent },
    { path: '', redirectTo: '/main', pathMatch: 'full' },
];
