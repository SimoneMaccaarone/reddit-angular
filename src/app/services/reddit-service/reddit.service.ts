import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})

export class RedditService {
  static data: any;

  constructor(private http:HttpClient){}

  static BASE_URL = 'https://www.reddit.com/r/'

  static getPage(data: string) {
    return fetch(this.BASE_URL + data + 'hot.json')
      .then(resp => console.log(resp.json()));
  }

}

RedditService.getPage('Overwatch/')
