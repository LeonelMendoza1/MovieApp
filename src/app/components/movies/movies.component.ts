import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/servicios/movies.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})


export class MoviesComponent implements OnInit {
  movies:any[] = [];
  constructor(private moviesService: MoviesService){

  }

  ngOnInit() {
  }

  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  getMovies(pelicula: string){
    this.moviesService.getMovies(pelicula).subscribe(data =>{
      this.movies = data.Search;
    })
  }

  submitMovie(nombrePelicula: HTMLInputElement){
    this.getMovies(nombrePelicula.value);
    nombrePelicula.value = '';
    return false;
  }

}
