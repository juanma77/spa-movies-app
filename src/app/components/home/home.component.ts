import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public popularMovies: any[] = [];

  public loading: boolean;
  public error: boolean; 

  public errorMessage: string; 


  constructor( private moviesService: MovieService ) {

    this.loading = true; 
    this.error = false; 

    this.moviesService.getPopularMovies().subscribe( (resp: any) => {

      this.popularMovies = resp.results;

      console.log( this.popularMovies );

      this.loading = false; 


    }, (err) =>{

      this.error = true;
      console.log( err );

      this.errorMessage = err.statusText;
      
      



    });



  }

  ngOnInit() {
  }

}
