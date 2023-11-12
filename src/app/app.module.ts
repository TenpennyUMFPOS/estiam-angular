import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { UserServiceService } from './user/user-service.service';
import { DataTablesModule } from "angular-datatables";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { HeaderComponent } from './constants/header/header.component';
import { FilmViewComponent } from './films/film-view/film-view.component';
import { AppRoutingModule } from './app-routing.module';
import { FilmsServiceService } from './films/films.service';
import { FilmCreateComponent } from './films/film-create/film-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './auth/login-form/login-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UserViewComponent,
    HeaderComponent,
    FilmViewComponent,
    FilmCreateComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataTablesModule,
    BrowserAnimationsModule,
    MatTabsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [UserServiceService, FilmsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
