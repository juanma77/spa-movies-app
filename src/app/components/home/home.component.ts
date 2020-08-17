import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public popularMovies: any[] = [];


  constructor( private moviesService: MovieService ) {


    this.moviesService.getPopularMovies().subscribe( (resp: any) => {

      this.popularMovies = resp;
      console.log( this.popularMovies );


    });



  }

  ngOnInit() {
  }

}
