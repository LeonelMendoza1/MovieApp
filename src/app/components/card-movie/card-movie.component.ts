import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/servicios/movies.service';


@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {
@Input('movie') movie: any;

  constructor(private moviesService: MoviesService){
  }

  ngOnInit(): void{
  }

 

}
