import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movie: any = {};

  public loading: boolean;

  constructor( private router: ActivatedRoute, private movieService: MovieService ) {

    this.loading = true;

    this.router.params.subscribe( params =>{

      console.log( params['id'] );


    })



  }

  ngOnInit() {
  }

}
