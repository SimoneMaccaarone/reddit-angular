import { coerceStringArray } from '@angular/cdk/coercion';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})

export class RedditService {
  // static data?: string;
  // static BASE_URL = 'https://www.reddit.com/r/'

  constructor(private http:HttpClient){}

  getRedditPosts(argument:string){
    return this.http.get<any>('https://www.reddit.com/r/'+ argument+'/hot.json?limit=100')
  }
}





//   static getPage(data?:string) {
//     if(data !== undefined){
//     return fetch(this.BASE_URL + data + 'hot.json?limit=100')
//       .then(resp => console.log('--- Con DATA ---',resp.json()));
//     }else{
//       return fetch(this.BASE_URL + 'all/hot.json?limit=100')
//       .then(resp => console.log('--- NULL ---', resp.json()))
//     }
//   }
// }

// RedditService.getPage('r/Overwatch')
