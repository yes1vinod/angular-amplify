import { Component, OnInit } from '@angular/core';
import Amplify, { API } from 'aws-amplify';
@Component({
  selector: 'app-movie-ratings',
  templateUrl: './movie-ratings.component.html',
  styleUrls: ['./movie-ratings.component.css']
})
export class MovieRatingsComponent implements OnInit {

  constructor( ) {
    API.get('api2', '/items', null).then(response => { alert(JSON.stringify(response)); });
    /* fetch restaurants when app loads */

  }

  ngOnInit(): void {
  }

}
