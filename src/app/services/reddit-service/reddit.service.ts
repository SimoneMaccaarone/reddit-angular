import { coerceStringArray } from '@angular/cdk/coercion';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})

export class RedditService {
  static data?: any;

  constructor(private http:HttpClient){}

  static BASE_URL = 'https://www.reddit.com/'

  static getPage(data?:any) {
    if(data !== undefined){
    return fetch(this.BASE_URL + data + 'hot.json')
      .then(resp => console.log('--- Con DATA ---',resp.json()));
    }else{
      return fetch(this.BASE_URL + 'hot.json')
      .then(resp => console.log('--- NULL ---',resp.json()));
    }
  }

}

RedditService.getPage()

// RedditService.getPage('r/Overwatch')
