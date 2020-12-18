import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-app';
  APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';

  IMGPATH = 'https://image.tmdb.org/t/p/w1280';

  movies
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.APIURL).subscribe(data => {
      console.log(data);
      this.movies = data.results
    })
  }
}
