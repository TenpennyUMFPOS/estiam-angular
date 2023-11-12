import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilmsServiceService } from '../films.service';
import { film } from 'src/app/interfaces/film';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-create',
  templateUrl: './film-create.component.html',
  styleUrls: ['./film-create.component.css']
})
export class FilmCreateComponent {

  filmForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  constructor(private fb: FormBuilder, private filmService: FilmsServiceService, private router: Router) {
    this.filmForm = this.fb.group({
      userId: [1, Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required],

    })
  }

  onSubmit() {
    try {

      const filmValues = this.filmForm.value;

      this.filmService.createFilm(filmValues).subscribe((response: film) => {
        this.successMessage = "Film  created Successfully, Wait to be redirected";
        setTimeout(() => {
          this.successMessage = "";
          this.router.navigate(['/users'])

        }, 3000);
        console.log(response);


      },
        (error) => {
          console.log('Error while creating film', error);
          console.log(error);
          this.errorMessage = "something went wrong!!";



        });
    } catch (e) {
      console.log("==>Catch error");
      this.errorMessage = "something went wrong!!";


    }


  }

}
