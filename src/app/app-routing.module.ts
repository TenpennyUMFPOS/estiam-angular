import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserViewComponent } from './user/user-view/user-view.component';
import { FilmViewComponent } from './films/film-view/film-view.component';
import { FilmCreateComponent } from './films/film-create/film-create.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  {
    path: 'users',
    component: UserViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'movies',
    component: FilmViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'movie-create',
    component: FilmCreateComponent,
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },



];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
