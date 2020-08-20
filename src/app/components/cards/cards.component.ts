import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() movies: any[] = [];

  public imgUrl = 'http://image.tmdb.org/t/p/w300//';

  constructor( private router: Router ) { }

  ngOnInit() {

    

    

  }

  

  public showMovie( movie: any ) {


   let movieId = movie.id; 

   this.router.navigate([ '/movie', movieId ]);

  

  }

}
