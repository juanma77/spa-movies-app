import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public apiKey: string = '9cf5176d0e57d9aecd4ce28d43f44c9c';
  public url: string = 'https://api.themoviedb.org/3';

  constructor( private httpClient: HttpClient ) { }

  public getPopularMovies() {

    let url = `${ this.url }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }&language=es`;

    return this.httpClient.get( url );

  }

}
