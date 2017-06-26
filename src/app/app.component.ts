import { Component } from '@angular/core';

import { Http, Response } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'Whatchu Want?';
link1 = 'https://api.giphy.com/v1/gifs/search?q=';
link2 = '&api_key=dc6zaTOxFJmzC&limit=10';
http: Http;
gifs = [];

constructor(http: Http) {
  this.http = http;
}


  searchClick(searchTerm: HTMLInputElement): void {
const searchLink = this.link1 + searchTerm.value + this.link2;

this.http.get(searchLink)
  .subscribe((res: Response) => {
  this.gifs = res.json().data;
  });
  }

}
