import { Component, OnInit } from '@angular/core';
import { FilmsServiceService } from '../films.service';
import { film } from 'src/app/interfaces/film';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})
export class FilmViewComponent implements OnInit {

  films: film[] = [];

  deleteMessage: string = '';
  loading: boolean = false;

  constructor(private filmService: FilmsServiceService) { }
  ngOnInit(): void {
    this.getFilms();
    console.log("delete message start", this.deleteMessage);

  }


  getFilms() {
    this.loading = true;

    this.filmService.listFilms().subscribe(res => {
      this.films = res;


    },
      error => {
        console.error('Error fetching films', error)
      },
      () => {
        this.loading = false
      })
  }

  itemsPerPage = 6;
  currentPage = 1;

  get pagedFilms() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.films.slice(startIndex, endIndex);
  }

  get pages() {
    const pageCount = Math.ceil(this.films.length / this.itemsPerPage);
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }


  deleteFilm(id: any) {
    this.filmService.deleteFilm(id).subscribe(
      () => {
        this.deleteMessage = "Film with ID " + id + "   has been deleted";
        console.log(this.deleteMessage);
        //I put This is just "as best practice" it won't get an updated view of film
        this.getFilms();
        setTimeout(() => {
          this.deleteMessage = '';
        }, 2000);

      },
      (error) => {
        console.error("Error deleting film:", error);
        this.deleteMessage = "Error deleting this item";
      }
    );
  }

}
