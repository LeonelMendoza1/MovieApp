import { Component, OnInit } from '@angular/core';
import { MoviesService } from './servicios/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movies-app';

  movie: any = <any>{};
  movie2: any[] = [];
  peliculas = [];

  constructor(private moviesService: MoviesService){

  }

  ngOnInit(): void{
  }
  
  getMovies(pelicula: string){
    this.moviesService.getMovies(pelicula).subscribe(data =>{
      console.log(pelicula)
    })
  }

  submitMovie(nombrePelicula: HTMLInputElement){
    console.log(nombrePelicula)
    this.getMovies(nombrePelicula.value);
    nombrePelicula.value = '';
    return false;
  }

}
