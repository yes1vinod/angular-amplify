import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieRatingsComponent } from './movie-ratings/movie-ratings.component';


const routes: Routes = [
  { path: 'rating', component: MovieRatingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule {

}
