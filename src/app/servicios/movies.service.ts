import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiKey: string = '97641121';
  apiKey2: string = '&apikey=97641121'
  URI: string = '';
  URI2: string = '';
  
  constructor(private http: HttpClient) { 
    this.URI = `https://www.omdbapi.com/?apikey=${this.apiKey}&s=`
    this.URI2 = `https://www.omdbapi.com/?i=`
  }

  getMovies(nombrePelicula: string): Observable<any>{
    return this.http.get(`${this.URI}${nombrePelicula}`);
  }

  getMovieByID(IDPelicula: string): Observable<any>{
    
    return this.http.get(`${this.URI2}${IDPelicula}${this.apiKey2}`);
  }
}
